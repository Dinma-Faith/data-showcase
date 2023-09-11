function updateDateAndTime() {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
    const currentTime = currentDate.getTime();

    document.getElementById('dayOfTheWeek').textContent = `Today is ${dayOfTheWeek}`
    document.getElementById('currentTime').textContent = `The time is: ${currentTime}`
}

updateDateAndTime();

setInterval(updateDateAndTime, 1000);
