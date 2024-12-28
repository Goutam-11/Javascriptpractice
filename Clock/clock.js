const sec = document.querySelector(".seconds");
const min = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function date() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDeg = (seconds / 60) * 360 + 90;
  const minutes = now.getMinutes();
  const minDeg = (minutes / 60) * 360 + 90;
  const hours = now.getHours();
  const hourDeg = (hours / 12) * 360 + 90;
  sec.style.transform = `rotate(${secondDeg}deg)`;
  min.style.transform = `rotate(${minDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(date, 1000);
