import {AuthCredentials} from '../../models/auth';

export interface UserAuth {
    refreshToken(token: string): Promise<string>;

    signIn(credentials: AuthCredentials): Promise<string>;

    signOut(token: string): Promise<void>;
}
