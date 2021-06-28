import {ResetPasswordService} from '../../domain/use-cases/reset-password';
import {later} from './base-mock';

export class ResetPasswordServiceMock implements ResetPasswordService {
    reset(password: string): Promise<void> {
        if (!password) {
            throw new Error();
        }
        return later(null, Math.random() * 1000 * 5);
    }

    resetRequest(email: string): Promise<void> {
        if (!email) {
            throw new Error();
        }
        return later(null, Math.random() * 1000 * 5);
    }
}
