function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysNumber() {
  let daysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let currentDay = dezDaysList[i];
    let day = document.createElement('li');
    day.innerHTML = dezDaysList[i];
    day.className = 'day';

    if ((currentDay === 24) || (currentDay === 25) || (currentDay === 31)) {
      day.className += ' holiday';
    }
    if ((currentDay === 4) || (currentDay === 11) || (currentDay === 18) || (currentDay === 25)) {
      day.className += ' friday';
    }

    daysList.appendChild(day);
  }
}

createDaysNumber();


// Exercício 2
function createBtn(buttonName) {
  let container = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  newBtn.innerHTML = buttonName;
  newBtn.id = 'btn-holiday';
  container.appendChild(newBtn);
}

createBtn('Feriados');

// Exercício 3
function highlightHolidays() {
  let holidayBtn = document.querySelector('#btn-holiday');
  let holidaysList = document.querySelectorAll('.holiday');
  let originalColor = 'rgb(238, 238, 238)';
  let newColor = 'rgb(213, 213, 213)';

  holidayBtn.addEventListener('click', function() {
    for (let i = 0; i < holidaysList.length; i += 1) {
      if (holidaysList[i].style.backgroundColor === newColor) {
        holidaysList[i].style.backgroundColor = originalColor;
      } else {
        holidaysList[i].style.backgroundColor = newColor;
      }
    }
  })
}

highlightHolidays();


// Exercício 4 - same as the 2nd one ¬¬
function fridayButton(btnName) {
  let container = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  newBtn.id = 'btn-friday';
  newBtn.innerHTML = btnName;
  container.appendChild(newBtn);
}

fridayButton('Sexta-feira');


// Exercício 5 - wish I could use the same function from exercise 3
function showFridays() {
  let fridayBtn = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let newColor = 'rgb(240, 217, 255)';

  fridayBtn.addEventListener('click', function() {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].style.backgroundColor === newColor) {
        fridays[i].style.backgroundColor = 'rgb(238, 238, 238)';
      } else {
        fridays[i].style.backgroundColor = newColor;
      }
    }
  });
}

showFridays();

// Exercício 6
function zoomInDay() {
  let daysList = document.querySelector('#days');

  daysList.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '35px';
  })
}

function zoomOutDay() {
  let daysList = document.querySelector('#days');

  daysList.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
}

zoomInDay();
zoomOutDay();


// Exercício 7
function addTask(task) {
  let tasksDiv = document.querySelector('.my-tasks');
  let newTask = document.createElement('span');
  newTask.innerText = task;
  tasksDiv.appendChild(newTask);
}

addTask('cozinhar');


// Exercício 8
function taskColor(color) {
  let parent = document.querySelector('.my-tasks');
  let taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.style.backgroundColor = color;
  parent.appendChild(taskDiv);
}

taskColor('cyan');