// Retrieve points from local storage or set to 200 if not found
let points = localStorage.getItem('points');
if (points === null) {
  points = 200;
} else {
  points = parseInt(points);
}
updatePointsDisplay();

// Event listeners for button clicks
document.getElementById('successful-btn').addEventListener('click', handleSuccessful);
document.getElementById('unsuccessful-btn').addEventListener('click', handleUnsuccessful);

function handleSuccessful() {
  points += 5;
  updatePointsDisplay();
}

function handleUnsuccessful() {
  points -= 5;
  updatePointsDisplay();
}

function updatePointsDisplay() {
  document.getElementById('points').textContent = points;
  // Store points in local storage
  localStorage.setItem('points', points.toString());
}
