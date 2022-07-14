localStorage.setItem('nome', 'Carlos');
localStorage.nome = 'Carlos';
localStorage['nome'] = 'Carlos';
localStorage.setItem('idade', 25);

localStorage.getItem('nome');
localStorage.nome;
localStorage['nome'];

const usuario = {
    nome: 'Carlos',
    idade: 30,
    corDeCabelo: 'Preto'
}

// Definindo um objeto inteiro para o localStorage
localStorage.usuario = JSON.stringify(usuario);
const usuarioLocalStorage = JSON.parse(localStorage.usuario);


