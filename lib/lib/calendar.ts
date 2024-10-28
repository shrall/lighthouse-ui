import { isDateAfterType, isDateBeforeType, isDateInterval, isDateRange, Matcher, rangeIncludesDate } from "react-day-picker";

export const getYearRange = (year: number) => {
    const startYear = Math.floor(year / 12) * 12;
    const endYear = startYear + 11;
    return `${startYear}-${endYear}`;
};

export const isMonthDisabled = (
    month: number,
    year: number,
    disabled: Matcher[] | undefined,
) => {
    if (!disabled || !Array.isArray(disabled)) return false;
    let isDisabled = false;

    disabled.forEach((matcher) => {
        if (isDateInterval(matcher)) {
            isDisabled =
                (matcher.before.getMonth() > month &&
                    matcher.before.getFullYear() >= year) ||
                (matcher.after.getMonth() < month &&
                    matcher.after.getFullYear() <= year);
        } else if (isDateAfterType(matcher)) {
            isDisabled =
                matcher.after.getMonth() < month && matcher.after.getFullYear() <= year;
        } else if (isDateBeforeType(matcher)) {
            isDisabled =
                matcher.before.getMonth() > month &&
                matcher.before.getFullYear() >= year;
        } else if (isDateRange(matcher)) {
            isDisabled =
                rangeIncludesDate(matcher, new Date(year, month, 1)) &&
                rangeIncludesDate(matcher, new Date(year, month + 1, 0));
        }
    });

    const disabledDates = disabled.filter((matcher) => matcher instanceof Date);
    if (disabledDates.length > 0) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const allDatesInMonth = Array.from(
            { length: daysInMonth },
            (_, i) => new Date(year, month, i + 1),
        );

        isDisabled = allDatesInMonth.every((date) =>
            disabledDates.some(
                (disabledDate) => disabledDate.toDateString() === date.toDateString(),
            ),
        );
    }
    return isDisabled;
};

export const isYearDisabled = (year: number, disabled: Matcher[] | undefined) => {
    if (!disabled || !Array.isArray(disabled)) return false;
    let isDisabled = false;

    disabled.forEach((matcher) => {
        if (isDateInterval(matcher)) {
            isDisabled =
                matcher.before.getFullYear() > year ||
                matcher.after.getFullYear() < year;
        } else if (isDateAfterType(matcher)) {
            isDisabled = matcher.after.getFullYear() < year;
        } else if (isDateBeforeType(matcher)) {
            isDisabled = matcher.before.getFullYear() > year;
        } else if (isDateRange(matcher)) {
            // Check if the entire year falls within the range
            isDisabled =
                rangeIncludesDate(matcher, new Date(year, 0, 1)) && // First day of year
                rangeIncludesDate(matcher, new Date(year, 11, 31)); // Last day of year
        }
    });

    // Handle disabled specific dates
    const disabledDates = disabled.filter((matcher) => matcher instanceof Date);
    if (disabledDates.length > 0) {
        // Generate all days in the year
        const allDatesInYear = Array.from(
            { length: 12 },
            (_, month) => new Date(year, month + 1, 0).getDate(), // Last day of each month
        ).reduce((dates, daysInMonth, month) => {
            const monthDates = Array.from(
                { length: daysInMonth },
                (_, day) => new Date(year, month, day + 1),
            );
            return [...dates, ...monthDates];
        }, [] as Date[]);

        // Year is disabled if all dates in the year are disabled
        isDisabled = allDatesInYear.every((date) =>
            disabledDates.some(
                (disabledDate) => disabledDate.toDateString() === date.toDateString(),
            ),
        );
    }

    return isDisabled;
};