import {Optional} from '../../shared/types/general';

export interface ItemStorage<T> {
    save(data: T): Promise<void>;

    load(): Promise<Optional<T>>;
}
