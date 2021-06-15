import AsyncStorage from '@react-native-async-storage/async-storage';
import {Optional} from '../../../shared/types/general';
import {ItemStorage} from '../../../domain/use-cases/storage';
import {IUserAppointment} from '../../../domain/entities/appointment';

type AppointmentCollection = IUserAppointment[];

export class AppointmentAsyncStorageService
    implements ItemStorage<AppointmentCollection>
{
    private static readonly key = 'appointment';

    async load(): Promise<Optional<AppointmentCollection>> {
        const userJSON = new Optional(
            await AsyncStorage.getItem(AppointmentAsyncStorageService.key),
        );
        return userJSON.ifHasValue<AppointmentCollection>(json =>
            JSON.parse(json),
        );
    }

    save(data: AppointmentCollection): Promise<void> {
        return AsyncStorage.setItem(
            AppointmentAsyncStorageService.key,
            JSON.stringify(data),
        );
    }
}
