function showWeather(){
    document.getElementById("weather").style.display="flex";
    document.getElementById("pomodoroTimer").style.display="none";
    document.getElementById("todoApplication").style.display="none";
}
function showTimer(){
    document.getElementById("weather").style.display="none";
    document.getElementById("pomodoroTimer").style.display="flex";
    document.getElementById("todoApplication").style.display="none";
}
function showToDo(){
    document.getElementById("weather").style.display="none";
    document.getElementById("pomodoroTimer").style.display="none";
    document.getElementById("todoApplication").style.display="flex";
}

// POMODORO CODE //
const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    sessions: 0,
  };
  
  let interval;
  
  const mainButton = document.getElementById('js-btn');
  mainButton.addEventListener('click', () => {
    const { action } = mainButton.dataset;
    if (action === 'start') {
      startTimer();
    } else {
      stopTimer();
    }
  });
  
  const modeButtons = document.querySelector('#js-mode-buttons');
  modeButtons.addEventListener('click', handleMode);
  
  function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;
  
    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);
  
    return {
      total,
      minutes,
      seconds,
    };
  }
  
  function startTimer() {
    let { total } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;
  
    if (timer.mode === 'pomodoro') timer.sessions++;
  
    mainButton.dataset.action = 'stop';
    mainButton.textContent = 'stop';
    mainButton.classList.add('active');
  
    interval = setInterval(function() {
      timer.remainingTime = getRemainingTime(endTime);
      updateClock();
  
      total = timer.remainingTime.total;
      if (total <= 0) {
        clearInterval(interval);
  
        switch (timer.mode) {
          case 'pomodoro':
            if (timer.sessions % timer.longBreakInterval === 0) {
              switchMode('longBreak');
            } else {
              switchMode('shortBreak');
            }
            break;
          default:
            switchMode('pomodoro');
        }
  
        if (Notification.permission === 'granted') {
          const text =
            timer.mode === 'pomodoro' ? 'Work Time' : 'Take a break!';
          new Notification(text);
        }
  
        document.querySelector(`[data-sound="${timer.mode}"]`).play();
  
        startTimer();
      }
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(interval);
  
    mainButton.dataset.action = 'start';
    mainButton.textContent = 'start';
    mainButton.classList.remove('active');
  }
  
  function updateClock() {
    const { remainingTime } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');
  
    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');
    min.textContent = minutes;
    sec.textContent = seconds;
  
    const text =
      timer.mode === 'pomodoro' ? 'Work Time' : 'Take a break!';
    document.title = `${minutes}:${seconds} — ${text}`;
  
    const progress = document.getElementById('js-progress');
    progress.value = timer[timer.mode] * 60 - timer.remainingTime.total;
  }
  
  function switchMode(mode) {
    timer.mode = mode;
    timer.remainingTime = {
      total: timer[mode] * 60,
      minutes: timer[mode],
      seconds: 0,
    };
  
    document
      .querySelectorAll('button[data-mode]')
      .forEach(e => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.body.style.backgroundColor = `var(--${mode})`;
    document
      .getElementById('js-progress')
      .setAttribute('max', timer.remainingTime.total);
  
    updateClock();
  }
  
  function handleMode(event) {
    const { mode } = event.target.dataset;
  
    if (!mode) return;
  
    switchMode(mode);
    stopTimer();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    if ('Notification' in window) {
      if (
        Notification.permission !== 'granted' &&
        Notification.permission !== 'denied'
      ) {
        Notification.requestPermission().then(function(permission) {
          if (permission === 'granted') {
            new Notification(
              'You will be alerted when schedule type'
            );
          }
        });
      }
    }
  
    switchMode('pomodoro');
  });

  //TO DO LIST CODE //
  const inputBox = document.getElementById("toDoInputBox");
  const listContainer = document.getElementById("toDoListContainer");
  
  function addTask(){
  
      if (inputBox.value === ""){
          alert("Please input an item you'd like to add");
      }
      else{
          let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
      }
      inputBox.value = ""
      saveData();
  }
  
  listContainer.addEventListener("click", function(e){
      if(e.target.tagName ==="LI"){
          e.target.classList.toggle("checked");
          saveData();
      }
      else if(e.target.tagName ==="SPAN"){
          e.target.parentElement.remove();
          saveData();
      }
  }, false);
  
  function saveData(){
      localStorage.setItem("data", listContainer.innerHTML);
  }
  function ShowList(){
      listContainer.innerHTML = localStorage.getItem("data");
  }
  ShowList();

