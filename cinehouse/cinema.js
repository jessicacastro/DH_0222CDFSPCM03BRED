const catalogo = require("./database/catalogo.json")
var cinehouse = "DH"


// const catalogo = [
//   {
//     codigo: 1,
//     titulo: 'Harry Potter e a Ordem da Fênix',
//     duracao: 2,
//     atores: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
//     anoDeLancamento: 2007,
//     emCartaz: false
//   },
//   {
//     codigo: 2,
//     titulo: 'O Massacre da Serra Elétrica',
//     duracao: 1.5,
//     atores: ['Cassio', 'Ygor Silva'],
//     anoDeLancamento: 2022,
//     emCartaz: true
//   },
// ]

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
  catalogo.push(
    {
    codigo,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz
    }
  )
}
// = >
function buscarFilme(identificador) {
  const filme = catalogo.find((objeto) => objeto.codigo == identificador)

  return filme
}

// = >
// !true = false
// !false = true
// const alterarStatusEmCartaz = (codigoDoFilme) => {
//   const filmeParaAlterar = catalogo.find((filme) => filme.codigo == codigoDoFilme)
  
//   filmeParaAlterar.emCartaz = !filmeParaAlterar.emCartaz

//   return filmeParaAlterar
// }



function listarTodosOsFilmes() {
  // let listaFilmes = []

  for (let index = 0; index < catalogo.length; index++) {
    // listaFilmes.push(catalogo[index])
    console.log(catalogo[index])
  }

  // return listaFilmes
}

function listarFilmesEmCartaz() {
  for (let index = 0; index < catalogo.length; index++) {
    catalogo[index].emCartaz ? 
      console.log(catalogo[index]) 
      : null
  }
}

function alterarStatusEmCartaz(codigo) {
  let filmeAlterado
  for (let index = 0; index < catalogo.length; index++) {
    if (catalogo[index].codigo == codigo) {
      catalogo[index].emCartaz = !catalogo[index].emCartaz
      filmeAlterado = catalogo[index]
    }
  }

  return filmeAlterado
}

// !true = false
// !false = true


// console.log(listaDosFilmes)

// adicionarFilme(3, 'Lilo e Stitch', 1.5, ['Lilo', 'Stitch'], 2002, false)

// // // console.log(catalogo)
// console.log('Seu filme é: ', buscarFilme(2))
// console.log('Seu filme alterado é: ', alterarStatusEmCartaz(1))

// // listarTodosOsFilmes();
// listarFilmesEmCartaz();








// const eMaior = (numero1, numero2) => (numero1 > numero2) ? 'É maior' : 'É menor'

// function eMaiorQue(numero1, numero2) {
//   if (numero1 > numero2) {
//     return 'É maior'
//   } else {
//     return 'É menor'
//   }
// }

// const eMaiorRodandoAfuncao = eMaior(1, 2)
// console.log(eMaiorRodandoAfuncao)

// const eMenor = 3 < 2 ? 'É menor' : null

// console.log(eMenor)

// let variavelVerdadeira = false;

// variavelVerdadeira = !variavelVerdadeira

// console.log(variavelVerdadeira)

// let stringUm = null; // false

// if (!stringUm) console.log('Não tem nada')
