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