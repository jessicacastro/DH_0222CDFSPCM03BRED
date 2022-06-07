// function funcaoUm(resultadoDaFuncaoUm) {
//   b(resultadoDaFuncaoUm, function(resultadoDaFuncaoB) {
//       c(resultadoDaFuncaoB, function(resultadoDaFuncaoC) {
//         d(resultadoDaFuncaoC, function(resultadoDaFuncaoD) {
//           console.log(resultadoDaFuncaoD);
//           f(
//             resultadoDaFuncaoD, 
//             function(resultadoDaFuncaoF) {
//             console.log(resultadoDaFuncaoF);
//           })
//         })
//       })
//   })
// }

// setTimeout(function() {
//   console.log(1);
// }, 3000);

const ehDia5 = true
const queroPagar = false

const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 6000);

  setTimeout(() => {
    reject("Promise não pode ser concluída porque faltou o número 6");
  }, 5000);

  // if (ehDia5 && queroPagar) {
  //   resolve('Amigo, vou te pagar! Toma aqui o dinheiro!');
  // }

  // reject('Amigo, não vou te pagar!');
})
let respostaDapromise = null;

console.log(promessa)

promessa.then(resposta => resposta)
.catch(erro => erro);

console.log(2)

console.log(respostaDapromise)

const logaAPromessa = async () => {
  try {
    respostaDapromise = await promessa;
    console.log(3);
    console.log(respostaDapromise);
  } catch (error) {
    console.log(error)
  }
}
logaAPromessa();

console.log(4)