const novaPublicacao = `<div class="card" id="">
<div class="card-header">
  <div>
    <img class="avatar" src="/img/avatar-example.png">
    <b>Ana Paula</b>
  </div>
  <img src="/img/icons/more-vertical.svg">
</div>
<div class="card-img">

</div>
<div class="card-body">
  <div class="card-itens">
    <div class="likes">
      <img src="/img/icons/heart.svg" width="24px">
      <b>1 likes</b>
    </div>
    <b>Postado no dia: 00/00/0000</b>
  </div>
  <div class="card-comments">
    <p><b>Nome comentarista</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  </p>
  </div>
</div>
<form class="form-comments" action="/comentar" method="post">
  <input type="text" hidden name="postId" value="">
  <input type="text" placeholder="Adicione um comentário..." name="description">
  <button type="submit">Comentar</button>
</form>
</div>`

const botaoVerMais = document.querySelector('#more');
const mainContainer = document.querySelector('main');

botaoVerMais.onclick = (event) => {
  event.preventDefault();
  mainContainer.removeChild(botaoVerMais);

  mainContainer.innerHTML += novaPublicacao;
  mainContainer.appendChild(botaoVerMais);

  pegaPublicacaoParaDefinirImagem('gatofofinho.jpeg');
}

function pegaPublicacaoParaDefinirImagem(imagem) {
  const publicacao = document.querySelectorAll('.card-img');

  publicacao[publicacao.length - 1].innerHTML = `<img src="/img/${imagem}">`;
}