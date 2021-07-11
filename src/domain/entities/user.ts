import {NamedEntity} from './general';
import {StringNullable} from '../../shared/types/general';

export interface UserResume extends NamedEntity {
    imageUrl?: StringNullable;
}

export interface IUser extends UserResume {
    email: string;
    username: string;
}

export class User implements IUser {
    readonly email: string = '';
    readonly id: string = '';
    readonly imageUrl?: StringNullable = '';
    readonly name: string = '';
    readonly username: string = '';

    constructor(data: IUser) {
        this.email = data.email;
        this.id = data.id;
        this.imageUrl = data.imageUrl;
        this.name = data.name;
        this.username = data.username;
    }
}
