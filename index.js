const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const mins1 = document.getElementById('mins');
const seconds1 = document.getElementById('second');





const newYears = '1 Jan 2024';

function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();



    const totalSeconds = (newYearsDate - currentDate) /1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor((totalSeconds / 60 )% 60);
    const seconds = Math.floor (totalSeconds) % 60;
     
     days1.innerHTML = formaTime(days);
     hours1.innerHTML = formaTime(hours);
     mins1.innerHTML =formaTime(mins);
     seconds1.innerHTML = formaTime(seconds);
}

function formaTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);


