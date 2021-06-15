export const later = <T>(delay: number, value: T): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, delay, value));
};

export abstract class MockService {
    protected mockRequest(...params: any[]): Promise<void> {
        if (!params) {
            throw new Error();
        }
        return later(1500, null);
    }

    protected generateGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
                const r = (Math.random() * 16) | 0;
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            },
        );
    }
}
