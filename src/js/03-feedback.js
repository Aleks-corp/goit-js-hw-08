import debounce from 'lodash.debounce';

const FEEDBACK_LS_KEY = 'feedback-form-state';

const formInput = document.querySelector('.feedback-form');
formInput.addEventListener('input', debounce(onInputFormField, 500));
formInput.addEventListener('submit', onSubmitFormInput);

function insertFormFromLocStor() {
  if (JSON.parse(localStorage.getItem(FEEDBACK_LS_KEY))) {
    const objForm = JSON.parse(localStorage.getItem(FEEDBACK_LS_KEY));

    const {
      elements: { email, message },
    } = formInput;
    email.value = objForm.email;
    message.value = objForm.message;
  }
}
insertFormFromLocStor();

function setToLocStor(objForm) {
  localStorage.setItem(FEEDBACK_LS_KEY, JSON.stringify(objForm));
}
function onInputFormField(evt) {
  evt.preventDefault();
  const objForm = {};
  const {
    elements: { email, message },
  } = formInput;
  objForm.email = email.value;
  objForm.message = message.value;
  setToLocStor(objForm);
}

function onSubmitFormInput(evt) {
  evt.preventDefault();
  const objForm = {};
  const {
    elements: { email, message },
  } = evt.currentTarget;
  objForm.email = email.value;
  objForm.message = message.value;
  console.log('FormInput', objForm);
  localStorage.removeItem(FEEDBACK_LS_KEY);
  formInput.reset();
}
