function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);
  const timeSet = `${hours}:${minutes}:${second}`;
  document.getElementById("clock").textContent = timeSet;
}

updateClock();
setInterval(updateClock, 1000);
