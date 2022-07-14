window.onload = () => {
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
  
    if (name.value.length > 80 || name.value.length <= 2) {
      console.log('Nome inválido');
      name.style.border = '2px solid red';
    }
  
    if (surname.value.length > 100 || name.value.length <=2) {
      console.log('Sobrenome inválido');
      surname.style.border = '2px solid red';
    }
  
    if (username.value.length > 15 || username.value.length < 10) {
      console.log('Usuário inválido');
      username.style.border = '2px solid red';
    }
  
    if (password.value.length > 100 || password.value.length < 5) {
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

  function getUsers() { 
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => console.log(users))
      .catch(error => console.log(error));
  }

  async function registerUser(event) {
    event.preventDefault();

    const { email, name, surname, username, password } = event.target.elements;

    const user = {
      email: email.value,
      name: name.value,
      surname: surname.value,
      username: username.value,
      password: password.value
    }

    const configRequest = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    await fetch('http://localhost:3000/users', configRequest)
    .then(response => response.json())
    .then(() => {
      // Salvar o usuário no localStorage

      // Redirecionar o usuário para a página de feed
      redirectToFeed()

      // Na página de feed, recuperar o usuário e mostrar o nome dele no header
    })
    .catch(error => console.error(error))  
  }

  function redirectToFeed() {
    window.location.href = "feed.html"
  }


  const formRegister = document.querySelector('.form-auth');
  formRegister.onsubmit = (event) => {
    event.preventDefault();
    registerUser(event);
  }
}