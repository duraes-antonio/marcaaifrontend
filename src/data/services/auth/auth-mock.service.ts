import {UserAuth} from '../../../domain/use-cases/user-auth';
import {AuthCredentials} from '../../../models/auth';

export class AuthServiceMock implements UserAuth {
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

    signIn(credentials: AuthCredentials): Promise<string> {
        const value = this.generateJWT(
            credentials.username,
            credentials.password,
        );
        return this.later(1500, value);
    }

    signOut(token: string): Promise<void> {
        if (!token) {
            throw new Error('Lançamento de erro só pra silenciar lint');
        }
        return Promise.resolve();
    }
}
