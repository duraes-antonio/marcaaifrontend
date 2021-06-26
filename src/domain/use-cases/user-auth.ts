import {AuthCredentials} from '../../models/auth';
import {User} from '../entities/user';

export interface UserAuth {
    refreshToken(token: string): Promise<string>;

    signIn(credentials: AuthCredentials): Promise<User & {token: string}>;

    signOut(token: string): Promise<void>;
}
