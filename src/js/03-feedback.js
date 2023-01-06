import throttle from 'lodash.throttle';

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener(
  'input',
  throttle(onValueInputWriteLocalStorage, 250)
);
refs.form.addEventListener('submit', onGetValueConsole);

function onValueInputWriteLocalStorage(e) {
  //   console.dir(e.target.value);

  const formData = new FormData(refs.form);

  formData.forEach((name, key) => {
    console.log(name, key);
  });
  //   const objFormValue = {
  //     email: e.target.value,
  //     message: e.target.value,
  //   };

  //   console.log(objFormValue);
  // console.log(objFormValue);
  // localStorage.setItem('feedback-form-state');
}

function onGetValueConsole(e) {
  e.preventDefault();
  //   const formData = {
  //     email: e.currentTarget.email.value,
  //     message: e.currentTarget.message.value,
  //   };
  console.log(e.target.input);
  //   console.dir(e.target);
  //   const formData = {
  //     email: e.target.input.elements.value,
  //     message: e.target.textarea.elements.value,
  //   };
  //   console.log(formData);
  //   refs.form.reset();
  //   localStorage.removeItem(STORAGE_KEY);
}

// const valueFromForm = JSON.parse(localStorage.getItem('feedback-form-state'));
// function onSetValueFormStart({ email, message }) {
//   refs.form.email.value = email;
//   refs.form.message.value = message;
// }
// if (localStorage) {
//   onSetValueFormStart();
// }

// function onWriteValueForm(data) {
//   email = data.currentTarget.email.value;
//   message = data.currentTarget.message.value;

//   const valueData = {
//     email,
//     message,
//   };
//   return valueData;
// }
