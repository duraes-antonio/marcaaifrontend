import {NamedEntity} from './general';
import {StringNullable} from '../../shared/types/general';

export interface IUser extends NamedEntity {
    email: string;
    username: string;
    imageUrl?: StringNullable;
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

export type LoginData = {
    email: string;
    password: string;
};
