function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  clock.textContent = timeString;
  date.textContent = dateString;

  // Trigger re-animation
  clock.classList.remove("animate");
  void clock.offsetWidth; // Trigger reflow
  clock.classList.add("animate");
}
setInterval(updateClock, 1000);
updateClock();
