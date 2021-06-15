import {User} from '../entities/user';
import {Optional} from '../../shared/types/general';

export interface UserStorage {
    saveUser(data: User): Promise<void>;

    loadUser(): Promise<Optional<User>>;
}
