import { date } from '../assets/service/date.js';  

const checkOperation = async () => {
    const { dayOfWeek, hours } = date();
    const startHourWeekday = 16;
    const endHoursWeekday = 22;
    const startHourWeekend = 17;
    const endHoursWeekend = 22;

    if ((dayOfWeek == 'Saturday' || dayOfWeek == 'Sunday') && hours >= startHourWeekend && hours <= endHoursWeekend) {
        const openingHours = document.getElementById('opening-hours');
        openingHours.style.backgroundColor = 'green';
    } else if (hours >= startHourWeekday && hours <= endHoursWeekday){
        const openingHours = document.getElementById('opening-hours');
        openingHours.style.backgroundColor = 'green';
    }
};

checkOperation();
