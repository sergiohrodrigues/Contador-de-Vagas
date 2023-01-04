const btnInserir = document.querySelector("#btnInserir");
const valorInpt = document.querySelector("#valorInpt");
const res = document.querySelector("#res");
const principal = document.querySelector("#principal");
const secundaria = document.querySelector(".secundaria");
const error = document.querySelector("#principal__erro")

function verificarInput(){
  if(valorInpt.value === ""){
    error.style.display = "block";
  } else if(valorInpt.value == 0){
    error.innerHTML = "Digite um numero diferente de 0"
    error.style.display = "block";
  } else {
    res.innerHTML = `${valorInpt.value}`;
    principal.style.display = "none";
    secundaria.style.display = "block";
  }
}

btnInserir.addEventListener("click", verificarInput)



const btnEntrou = document.querySelector("#btnEntrou")
const arrowDown = document.querySelector("#arrow-down");

function entrou(){
  let resultado = document.querySelector("#res");
  let valorNovo = parseInt(resultado.textContent) - 1;
  resultado.textContent = valorNovo
  if(valorNovo < 0){
    alert("Numero de vagas zerado, espere sair alguém")
    resultado.textContent = 0;
  } else {
    arrowDown.style.visibility = "visible";
    arrowUp.style.visibility = "collapse";
  }
}

btnEntrou.addEventListener('click', entrou)


const btnSaiu = document.querySelector("#btnSaiu")
const arrowUp = document.querySelector("#arrow-up")

function saiu(){
  let resultado = document.querySelector("#res");
  let valorNovo = parseInt(resultado.textContent) + 1;
  resultado.textContent = valorNovo
  arrowUp.style.visibility = "visible"
  arrowDown.style.visibility = "collapse"
}

btnSaiu.addEventListener('click', saiu)


const btnVoltar = document.querySelector("#btnVoltar");

function voltar(){
  window.location.href = "./index.html"
}

btnVoltar.addEventListener("click", voltar)


















// function inserir(){
//   const principal = document.querySelector("#principal");
//   const secundaria = document.querySelector("#secundaria")
//   const vagas = document.querySelector("#valor").value;
//   const res = document.querySelector("#resultado")


//   if(vagas == ""){
//     alert("[ERRO] Por favor digite o numero de vagas!")
//   } else if(vagas == 0){
//     alert('Por favor digite um numero diferente de 0')
//     document.querySelector("#valor").value = "";
//   } else {
//     principal.style.display = "none";
//     secundaria.style.display = "block";
//     res.textContent = `${vagas} <br>Vagas disponiveis`;
//   }
// }

// function entrou(){
//   var vagas = document.querySelector("#valor").value;
//       if(vagas.length == 0 || vagas.length == ""){
//         alert('Por favor insira um numero antes de usar esse botão')
//       } else {
//         var elementResultado = document.querySelector("#resultado");
//         var valorNovo = parseInt(elementResultado.textContent) - 1;
//         if(valorNovo == vagas){
//             alert('ERRO vagas alcançadas')
//             elementResultado.textContent = Number(valorNovo) - 1
//             elementResultado.innerHTML += "<br> Vagas disponiveis"
//         }else if (valorNovo <= -1){
//           alert('Numero de vagas zerado')
//         } else {
//           elementResultado.textContent = valorNovo;
//           elementResultado.innerHTML += "<br> Vagas disponiveis"
//         }
//       }
//     }

// function saiu(){
//   var vagas = document.querySelector("#valor").value;
//     if(vagas.length == 0 || vagas.length == ""){
//       alert('Por favor insira um numero antes de usar esse botão')
//     } else {
//       var elementResultado = document.querySelector("#resultado");
//       var valorNovo = parseInt(elementResultado.textContent) + 1;
//       if(valorNovo > vagas){
//         alert('Limite de vagas alcançado')
//       } else {
//         elementResultado.textContent = valorNovo;
//         elementResultado.innerHTML += "<br> Vagas disponiveis"
//       }
      
//     }
// }

// function limpar(){
//   var vagas = document.querySelector("#valor").value;
//   if(vagas.length == ""){
//     alert('Não tem dados para limpar')
//   } else {
//     document.querySelector("#valor").value = "";
//     document.querySelector("#resultado").textContent = "";
//   }
// }