export const later = <T>(
    value: T,
    delay = Math.random() * 3000,
): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, delay, value));
};

export abstract class MockService {
    protected mockRequest(...params: any[]): Promise<void> {
        if (!params) {
            throw new Error();
        }
        return later(null, Math.random() * 3500);
    }

    protected generateGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
                // eslint-disable-next-line no-bitwise
                const r = (Math.random() * 16) | 0;
                // eslint-disable-next-line no-bitwise
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            },
        );
    }
}
