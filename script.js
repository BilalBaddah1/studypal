// To-Do List
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  li.onclick = () => li.classList.toggle('done');
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}

// Pomodoro Timer
let time = 1500; // 25 mins in seconds
let timerInterval = null;

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerInterval);
      alert("Pomodoro finished! Take a break.");
      return;
    }
    time--;
    updateTimerDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 1500;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById('timer').textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

updateTimerDisplay();
