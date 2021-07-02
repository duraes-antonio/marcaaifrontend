import {IdType} from '../../shared/store/types';

export interface Entity {
    id: IdType;
}

export interface NamedEntity extends Entity {
    name: string;
}

export abstract class Clonable {
    clone<T>(newData?: Partial<T>): this {
        const newInstance: this = Object.create(this.constructor.prototype);
        Object.assign(newInstance, this);

        if (newData) {
            Object.assign(newInstance, newData);
        }
        return newInstance;
    }
}
