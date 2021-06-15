export type IdType = string;

export interface ReduxAction {
    type: string;
}

export interface ReduxActionWithValue<T> extends ReduxAction {
    value?: T | null | undefined;
}

export interface ReduxActionWithId extends ReduxActionWithValue<IdType> {
    value: IdType;
}

// TODO: FInalizar
export type State<T> = any;

export type Reducer = <T>(state: State<T>, action: ReduxAction) => State<T>;
