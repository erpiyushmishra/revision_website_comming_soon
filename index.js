const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const min = document.querySelector(".mins");
const sec = document.querySelector(".secs");

const timeFunction = () => {
  const targeted_time = new Date(2024, 7, 5);
  const current_time = new Date();

  let days = targeted_time.getDate() - current_time.getDate();
  let hours = targeted_time.getHours() - current_time.getHours();
  let mins = targeted_time.getMinutes() - current_time.getMinutes();
  let secs = targeted_time.getSeconds() - current_time.getSeconds();

  if (secs < 0) {
    mins = mins - 1;
    secs = secs + 60;
    if (mins < 0) {
      hours = hours - 1;
      mins = mins + 60;
      if (hours < 0) {
        days = days - 1;
        hours = hours + 24;
      }
    }
  }

  day.innerHTML = days;
  hour.innerHTML = hours;
  min.innerHTML = mins;
  sec.innerHTML = secs;
};

setInterval(()=>{
    timeFunction()
}, 1000);
