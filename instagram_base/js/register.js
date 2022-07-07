const changeUsernameTagToStrong = () => {
  const usernameDiv = document.querySelector('.avatar-content div');

  usernameDiv.innerHTML = `<strong>${usernameDiv.innerHTML}</strong>`;
  usernameDiv.style.textTransform = 'uppercase';
}

const changePlaceholderInputName = () => {
  const inputName = document.querySelector('input[name="name"]');

  inputName.placeholder = 'Primeiro nome';
}

const changePlaceholderInputNameWithGetElementsByName = () => {
  const inputName = document.getElementsByName('name')[0];
  
  inputName.placeholder = 'Primeiro nome';
}

const changeDocumentBackgroundColor = () => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  body.style.backgroundColor = '#fafafa';
  header.style.backgroundColor = '#fafafa';
}

changeUsernameTagToStrong();
// changePlaceholderInputName();
changePlaceholderInputNameWithGetElementsByName();
changeDocumentBackgroundColor();

// const validateEmail = (event) => {
//   event.preventDefault();

//   const { value } = event.target;

//   if (!value.includes('@') || !value.includes('.com') || value.length < 10) {
//     console.log('Email inválido');
//     event.target.style.border = '2px solid red';
//   }
// }
// const emailInput = document.getElementById('email');
// emailInput.style.outline = 'none';
// emailInput.onfocus = (event) => emailInput.style.border = '2px solid green';
// emailInput.onblur = (event) => validateEmail(event)
// emailInput.onchange = (event) => validateEmail(event);

const validate = ({ email, name, surname, username, password }) => {
  if (!email.value.includes('@') || !email.value.includes('.com') || email.value.length < 10) {
    console.log('Email inválido');
    email.style.border = '2px solid red';
  }

  if (name.value.length < 3) {
    console.log('Nome inválido');
    name.style.border = '2px solid red';
  }

  if (surname.value.length < 3) {
    console.log('Sobrenome inválido');
    surname.style.border = '2px solid red';
  }

  if (username.value.length < 3) {
    console.log('Usuário inválido');
    username.style.border = '2px solid red';
  }

  if (password.value.length < 3) {
    console.log('Senha inválida');
    password.style.border = '2px solid red';
  }
}

const form = document.querySelector('.form-auth');
form.onsubmit = (event) => {
  event.preventDefault();

  const { email, name, surname, username, password } = event.target.elements;

  validate({ 
    email: email, 
    name: name,
    surname: surname, 
    username: username, 
    password: password 
  });
}

