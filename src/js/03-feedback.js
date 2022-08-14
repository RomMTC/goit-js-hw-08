// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//     в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. 
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
//     message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
  
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onInputChange, 500));
formRef.addEventListener('submit', onSubmitForm);

dataFromLocalStorage();

function onInputChange(e) {
   formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  // console.log(e.target.value);
  // console.log(localStorage);
};

function onSubmitForm(e) {
  e.preventDefault();
  // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  // formData.email = email.value;
  // formData.message = message.value;
  formData.email = email.value;
  formData.message = message.value;
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function dataFromLocalStorage() {
  const dataStorage = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(dataStorage);
  if (data === null) {
    return;
} else if (data.email === undefined) {
     email.value = '';
    message.value = data.message;
  } else if (data.message === undefined) {
    email.value = data.email;
    message.value = '';
  } else {
    email.value = data.email;
    message.value = data.message;
    }
};



