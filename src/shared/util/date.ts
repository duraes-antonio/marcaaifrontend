const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const MS_PER_SECOND = 1000;

const secondsToMs = (seconds: number) => seconds * MS_PER_SECOND;
const minutesToMs = (minutes: number) =>
    minutes * SECONDS_PER_MINUTE * MS_PER_SECOND;
const hoursToMs = (hours: number) =>
    hours * MINUTES_PER_HOUR * SECONDS_PER_MINUTE * MS_PER_SECOND;

function beforeToday(date: Date): boolean {
    const today = new Date(Date.now());
    return (
        date.getFullYear() <= today.getFullYear() &&
        date.getMonth() <= today.getMonth() &&
        date.getDate() < today.getDate()
    );
}

function isToday(date: Date): boolean {
    const today = new Date(Date.now());
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

const afterToday = (date: Date) => !(beforeToday(date) || isToday(date));

function timeToMilliseconds(date: Date): number {
    if (!date) {
        return 0;
    }
    return (
        hoursToMs(date.getHours()) +
        minutesToMs(date.getMinutes()) +
        secondsToMs(date.getSeconds()) +
        date.getMilliseconds()
    );
}

export const utilDate = {
    beforeToday,
    isToday,
    afterToday,
    timeToMilliseconds,
};
