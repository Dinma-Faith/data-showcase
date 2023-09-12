function updateDateAndTime() {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfTheWeek = daysOfTheWeek[currentDate.getUTCDay()];
    const currentTimeMillis = currentDate.getTime();

    document.getElementById('dayOfTheWeek').textContent = `Today is ${dayOfTheWeek}`
    document.getElementById('currentTimeMillis').textContent = `UTC time in millisecond: ${currentTimeMillis}`;
}

updateDateAndTime();

setInterval(updateDateAndTime, 1000);
