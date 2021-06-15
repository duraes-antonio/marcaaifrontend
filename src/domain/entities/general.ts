import {IdType} from '../../shared/store/types';

export interface Entity {
    id: IdType;
}

export interface NamedEntity extends Entity {
    name: string;
}
