let timeoutId: NodeJS.Timeout;

export const debounce = async <R>(
    func: (args: any) => R,
    delayMs = 250,
): Promise<(args: any) => R> => {
    return (...args): any => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(async () => {
            return await func.apply(null, args);
        }, delayMs);
    };
};
