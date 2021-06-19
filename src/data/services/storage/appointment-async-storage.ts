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
        const json = await AsyncStorage.getItem(
            AppointmentAsyncStorageService.key,
        );
        const dataJson = new Optional(json);
        return dataJson.ifHasValue<AppointmentCollection>(_json =>
            JSON.parse(_json),
        );
    }

    save(data: AppointmentCollection): Promise<void> {
        return AsyncStorage.setItem(
            AppointmentAsyncStorageService.key,
            JSON.stringify(data ?? []),
        );
    }
}
