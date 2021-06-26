import {StringNullable} from '../../shared/types/general';

export interface MenuOptionInput {
    title: string;
    value?: string;
}

export interface MenuInput {
    icon: JSX.Element;
    title: string;
    options: MenuOptionInput[];
}

export interface UserBasicData {
    name: string;
    username: string;
    email: string;
    imageUrl?: StringNullable;
}
