import {UserAuth} from '../../../domain/use-cases/user-auth';
import {AuthCredentials} from '../../../models/auth';
import {MockService} from '../base-mock';
import {User} from '../../../domain/entities/user';

export class AuthServiceMock extends MockService implements UserAuth {
    private generateJWT(email: string, pass: string): string {
        if (!email || !pass) {
            throw new Error('Email ou senha ausentes');
        }
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MjI5NDA3OTUsImV4cCI6MTY1NDQ3Njc5NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5hbWUiOiJKw6NvIGRhIFNpbHZhIiwiZW1haWwiOiJqYW9AZXhhbXBsZS5jb20ifQ.Wm6F2FjyH-dXdvywjJV-CAhfD83neZBL5CAMe654QTw';
    }

    private later<T>(delay: number, value: T): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, delay, value));
    }

    refreshToken(token: string): Promise<string> {
        return Promise.resolve(token);
    }

    signOut(token: string): Promise<void> {
        if (!token) {
            throw new Error('Lançamento de erro só pra silenciar lint');
        }
        return Promise.resolve();
    }

    signIn(credentials: AuthCredentials): Promise<User & {token: string}> {
        const value = this.generateJWT(
            credentials.username,
            credentials.password,
        );
        const user: User = {
            email: 'jao@teste.com',
            name: 'João da Silva',
            username: 'jaodasilva',
            id: this.generateGuid(),
        };
        return this.later(1500, {...user, token: value});
    }
}
