export class Optional<T> {
    private readonly data?: T | null;

    get value(): T | null | undefined {
        return this.data;
    }

    constructor(data?: T | null | undefined) {
        this.data = data;
    }

    hasValue(): boolean {
        return !!this.data;
    }

    ifHasValue<R>(fn: (data: T) => R): Optional<R> {
        return new Optional<R>(this.hasValue() ? fn(this.value as T) : null);
    }
}

export type Nullable<T> = null | undefined | T;

export type StringNullable = Nullable<string>;
