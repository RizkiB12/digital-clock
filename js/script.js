const images = [
  "./img/another-image-1.jpg",
  "./img/another-image-2.jpg",
  "./img/another-image-3.jpg",
  "./img/another-image-4.jpg",
];

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);
  const timeSet = `${hours}:${minutes}:${second} ${meridiem}`;
  document.getElementById("clock").textContent = timeSet;

  updateBackground(now);
}

function updateBackground(now) {
  const minutes = now.getMinutes();
  const imageIndex = Math.floor(minutes / 15) % images.length;
  document.body.style.backgroundImage = `url('${images[imageIndex]}')`;
}

updateClock();
setInterval(updateClock, 1000);
