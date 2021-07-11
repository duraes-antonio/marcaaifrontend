import {ViewStyle} from 'react-native';

export interface ListProps<T> {
    header?: JSX.Element;
    loading?: boolean;
    onRefresh?: () => void;
    onEndReached?: () => void;
    items: T[];
    style?: ViewStyle;
}
