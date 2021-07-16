import {ViewStyle} from 'react-native';
import {Nullable} from '../shared/types/general';

export interface ListProps<T> {
    header?: Nullable<JSX.Element>;
    loading?: boolean;
    onRefresh?: () => void;
    onEndReached?: () => void;
    items: T[];
    style?: ViewStyle;
}
