import throttle from 'lodash.throttle';

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  texarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

writeFormDataStart();

refs.form.addEventListener(
  'input',
  throttle(onValueInputWriteLocalStorage, 500)
);
refs.form.addEventListener('submit', onGetValueConsole);

function onValueInputWriteLocalStorage(e) {
  writeFormData(e);

  const stringFormData = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, stringFormData);
}

function onGetValueConsole(e) {
  e.preventDefault();

  if (formData.email === undefined || formData.message === undefined) {
    alert('Повторите ввод обоих полей');
  } else {
    console.log(formData);
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function writeFormData(e) {
  return (formData[e.target.name] = e.target.value);
}

function writeFormDataStart() {
  const getValueLocalStorage = localStorage.getItem(STORAGE_KEY);
  console.log(getValueLocalStorage);
  if (getValueLocalStorage) {
    const parseValueLocalStorage = JSON.parse(getValueLocalStorage);
    console.log(parseValueLocalStorage);

    if (parseValueLocalStorage.email === undefined) {
      refs.input.value = '';
    } else {
      refs.input.value = parseValueLocalStorage.email;
    }

    if (parseValueLocalStorage.message === undefined) {
      refs.input.message = '';
    } else {
      refs.texarea.value = parseValueLocalStorage.message;
    }
  }
}
