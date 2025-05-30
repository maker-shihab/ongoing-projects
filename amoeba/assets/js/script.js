const progressContainer = document.querySelector('.token_line_progress');
const currentBar = document.getElementById('progress-bar');

const start = parseFloat(progressContainer.dataset.start);
const end = parseFloat(progressContainer.dataset.end);
const value = parseFloat(progressContainer.dataset.value);

const percentage = ((value - start) / (end - start)) * 100;

currentBar.style.width = `${percentage}%`;