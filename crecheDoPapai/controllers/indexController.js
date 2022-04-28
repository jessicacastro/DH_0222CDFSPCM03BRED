// MVC 
// View vai pedir dados para o controllers
// O controller vai pedir dados para o Model de
// O model vai devolver dados para o controller
// O controller vai expor esses dados para a view

const indexController = {
  renderIndex: (requisicao, resposta) => {
    const modelUsuario = [{ id: 1}, { id: 2}, { id: 3}];
    const usuario = modelUsuario[2];
    console.log(usuario)

    resposta.render('index', { 
      titulo: 'Creche da mamãe', 
      nome: 'Lucas Aboud',
      nomeDoFilho: 'Neymar',
      idadeDoFilho: 10,
    });
  }
}

module.exports = indexController;