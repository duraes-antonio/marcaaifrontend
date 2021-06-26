import {UserAuth} from '../../../domain/use-cases/user-auth';
import {ApiAxios} from '../base-axios';
import {AuthCredentials} from '../../../models/auth';
import {User} from '../../../domain/entities/user';

export class AuthServiceAxios implements UserAuth {
    private readonly axiosInstance = ApiAxios;
    private readonly prefix = 'auth';

    private static buildHeaders(token: string): {Authorization: string} {
        return {
            Authorization: token,
        };
    }

    refreshToken(token: string): Promise<string> {
        return this.axiosInstance.post(`${this.prefix}/refresh`, null, {
            headers: AuthServiceAxios.buildHeaders(token),
        });
    }

    signIn(credentials: AuthCredentials): Promise<User & {token: string}> {
        return this.axiosInstance.post(`${this.prefix}/signin`, null, {
            auth: credentials,
        });
    }

    signOut(token: string): Promise<void> {
        return this.axiosInstance.post(`${this.prefix}/signout`, null, {
            headers: AuthServiceAxios.buildHeaders(token),
        });
    }
}
