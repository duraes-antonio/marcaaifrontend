const isToday = (date: Date) => {
    const today = new Date(Date.now());
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

export const utilDate = {
    isToday,
};
