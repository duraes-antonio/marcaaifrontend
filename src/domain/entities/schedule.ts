import {Entity} from './general';
import {IdType} from '../../shared/store/types';
import {utilDate} from '../../shared/util/date';

export interface MomentInput {
    start: Date;
    end: Date;
}

export class Moment implements MomentInput {
    readonly start!: Date;
    readonly end!: Date;

    constructor(data: MomentInput) {
        Object.assign(this, data);
    }

    /***
     * Verifica se o horário recebido está contido no intervalo do horário
     * de início e fim da instância do momento
     * @param date Data com horário a ser verificado
     * @returns true, se o horário estiver dentro do intervalo, senão, false
     */
    includeTime(date: Date): boolean {
        const timeStartInMs = utilDate.timeToMilliseconds(this.start);
        const timeEndInMs = utilDate.timeToMilliseconds(this.end);
        const timeNowInMs = utilDate.timeToMilliseconds(date);
        return timeNowInMs >= timeStartInMs && timeNowInMs <= timeEndInMs;
    }
}

export interface WorkdayInput extends Entity {
    officeHour: MomentInput;
    breaks: MomentInput[];
    closed: boolean;
}

export class Workday implements WorkdayInput {
    readonly id!: IdType;
    readonly breaks: Moment[] = [];
    readonly closed: boolean = false;
    readonly officeHour!: Moment;
    readonly status: WorkdayStatus = WorkdayStatus.UNKNOWN;

    constructor(data: WorkdayInput) {
        Object.assign(this, data);
        this.breaks = data.breaks.map(b => new Moment(b));
        this.officeHour = new Moment(data.officeHour);
        this.status = this.identifyStatus();
    }

    private identifyStatus(): WorkdayStatus {
        if (this.closed) {
            return WorkdayStatus.CLOSED_ALL_DAY;
        }

        const timeNow = new Date();

        if (!this.officeHour.includeTime(timeNow)) {
            return WorkdayStatus.CLOSED_TEMPORARILY;
        }

        return this.breaks.some(b => b.includeTime(timeNow))
            ? WorkdayStatus.CLOSED_TEMPORARILY
            : WorkdayStatus.OPENED;
    }
}

export enum WorkdayStatus {
    CLOSED_TEMPORARILY,
    CLOSED_ALL_DAY,
    OPENED,
    UNKNOWN,
}
