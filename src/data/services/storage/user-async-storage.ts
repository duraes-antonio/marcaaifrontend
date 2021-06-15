import {User} from '../../../domain/entities/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Optional} from '../../../shared/types/general';
import {ItemStorage} from '../../../domain/use-cases/storage';

export class UserAsyncStorageService implements ItemStorage<User> {
    private static readonly key = 'user';

    async load(): Promise<Optional<User>> {
        const userJSON = new Optional(
            await AsyncStorage.getItem(UserAsyncStorageService.key),
        );
        return userJSON.ifHasValue<User>(json => JSON.parse(json));
    }

    save(data: User): Promise<void> {
        return AsyncStorage.setItem(
            UserAsyncStorageService.key,
            JSON.stringify(data),
        );
    }
}
