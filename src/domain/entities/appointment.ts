import {Entity, NamedEntity} from './general';
import {utilDate} from '../../shared/util/date';
import dayjs from 'dayjs';
import {IdType} from '../../shared/store/types';
import {SalonService} from './service';

export interface ServiceProvider extends NamedEntity {}

export interface UserAppointmentInput {
    professionalId?: IdType;
    serviceId: IdType;
    timeStart: Date;
    timeEnd: Date;
}

export interface IUserAppointment extends Entity {
    ratingId?: IdType;
    service: SalonService;
    status: AppointmentStatus;
    timeStart: Date;
    timeEnd: Date;
}

export class UserAppointment implements IUserAppointment {
    readonly id: IdType;
    readonly ratingId?: IdType;
    readonly service: SalonService;
    readonly timeStart: Date;
    readonly timeEnd: Date;
    readonly status: AppointmentStatus = AppointmentStatus.WAITING;
    readonly eventDateFormatted: string;

    constructor(data: IUserAppointment) {
        this.id = data.id;
        this.ratingId = data.ratingId;
        this.status = data.status;
        this.service = data.service;
        this.timeStart = data.timeStart;
        this.timeEnd = data.timeEnd;
        this.eventDateFormatted = this.getStringDateEvent(
            data.timeStart,
            data.timeEnd,
        );
    }

    private getStringDateEvent(dateStart: Date, dateEnd: Date): string {
        const timeEndFormatted = dayjs(dateEnd).format('HH:mm');
        const startToday = utilDate.isToday(dateStart);
        let timeStartFormatted: string;

        if (startToday) {
            timeStartFormatted = 'Hoje' + dayjs(dateStart).format(' - HH:mm');
        } else {
            timeStartFormatted = dayjs(dateStart).format('DD/MM/YYYY - HH:mm');
        }
        return `${timeStartFormatted} às ${timeEndFormatted}`;
    }
}

export interface RatingAppointmentInput {
    value: number;
    appointmentId: IdType;
    comment?: string;
}

export interface RatingAppointment extends Entity, RatingAppointmentInput {
    userId: IdType;
    date: Date;
}

export enum AppointmentStatus {
    CANCELED,
    DONE,
    WAITING,
}
