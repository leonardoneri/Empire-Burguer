import { date } from '../assets/service/date.js';

const DAYS = {
    SUNDAY: 'Sunday',
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday',
    SATURDAY: 'Saturday',
}

const checkOperation = async () => {
    const { dayOfWeek, hours } = date();
    const startHourWeekday = 16;
    const endHoursWeekday = 22;
    const startHourWeekend = 17;
    const endHoursWeekend = 22;
    const openingHours = document.getElementById('opening-hours');

    switch (dayOfWeek) {
        case DAYS.SATURDAY:
        case DAYS.SUNDAY:
            if (hours >= startHourWeekend && hours <= endHoursWeekend) {
                openingHours.style.backgroundColor = 'green'
            }
            break
        case DAYS.MONDAY:
        case DAYS.TUESDAY:
        case DAYS.WEDNESDAY:
        case DAYS.THURSDAY:
        case DAYS.FRIDAY:
            if (hours >= startHourWeekday && hours <= endHoursWeekday) {
                openingHours.style.backgroundColor = 'blue'
            }
            break
    }
};


checkOperation();
