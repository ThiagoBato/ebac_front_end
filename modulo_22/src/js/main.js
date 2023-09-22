document.addEventListener("DOMContentLoaded", () => {
    const eventDate = new Date("Mar 19, 2024 19:00:00");
    const eventTimeStamp = eventDate.getTime();

    const timerCounter = setInterval(() => {
        const actualDate = new Date();
        const actualDateTimeStamp = actualDate.getTime();

        if (eventTimeStamp < actualDateTimeStamp) {
            document.querySelector(".hero__text").innerHTML = "O Evento já aconteceu e você perdeu!";
            document.querySelector(".btn").style.display = "none";
        } else {
            const timeUntilEvent = eventTimeStamp - actualDateTimeStamp;

            const daysInMs = 1000 * 60 * 60 * 24;
            const hoursInMs = 1000 * 60 * 60;
            const minutesInMs = 1000 * 60;
            const secondsInMs = 1000;

            const daysTillEvent = Math.floor(timeUntilEvent / daysInMs);
            const hoursTillEvent = Math.floor((timeUntilEvent % daysInMs) / hoursInMs);
            const minutesTillEvent = Math.floor((timeUntilEvent % hoursInMs) / minutesInMs);
            const secondsTillEvent = Math.floor((timeUntilEvent % minutesInMs) / secondsInMs);

            document.getElementById("dateCounting").innerHTML = `${daysTillEvent} dias, ${hoursTillEvent}h ${minutesTillEvent}m ${secondsTillEvent}s`;
        }
    }, 1000);
});
