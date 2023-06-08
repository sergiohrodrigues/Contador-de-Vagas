/*------------BOTAO INSERIR----------*/
const btnInserir = document.querySelector("#btnInserir");
const valorInpt = document.querySelector("#valorInpt");
const res = document.querySelector("#res");
const principal = document.querySelector("#principal");
const secundaria = document.querySelector(".secundaria");
const error = document.querySelector("#principal__erro");

btnInserir.addEventListener("click", verificarInput)

function verificarInput(){
  if(valorInpt.value < 0){
    alert('Por favor digite valores somente positivos')
    valorInpt.value = ''
    valorInpt.focus()
  } else {
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
}



/*--------------BOTAO ENTROU--------------*/
const btnEntrou = document.querySelector("#btnEntrou")
const arrowDown = document.querySelector("#arrow-down");
const mensagemDeErroVagas = document.querySelector(".mensagem-erro-vagas")


function entrou(){
  let resultado = document.querySelector("#res");
  let valorNovo = parseInt(resultado.textContent) - 1;
  resultado.textContent = valorNovo

  if(valorNovo < 0){
    mensagemDeErroVagas.style.visibility = "visible"
    mensagemDeErroVagas.innerHTML = "Sem vagas, espere alguém sair."
    resultado.textContent = 0;
    setTimeout(tirarErroSemVagas, 3000);
  }else {
    arrowDown.style.visibility = "visible";
    arrowUp.style.visibility = "collapse";
    setTimeout(tirarFlechaVermelha, 3000)
  }
  
  const valorInputTransformadoEmNumber = parseInt(valorInpt.value);
  
  if(valorNovo < valorInputTransformadoEmNumber){
    // mensagemDeErroVagas.style.visibility = "collapse"
    mensagemDeErroLimite.style.visibility = "hidden"
  }
  
}

function tirarErroSemVagas(){
  mensagemDeErroVagas.style.visibility = "hidden"
}

function tirarFlechaVermelha(){
  arrowDown.style.visibility = "hidden";
}

btnEntrou.addEventListener('click', entrou)



/*----------BOTAO SAIU-----------------*/
const btnSaiu = document.querySelector("#btnSaiu")
const arrowUp = document.querySelector("#arrow-up")
const mensagemDeErroLimite = document.querySelector(".mensagem-erro-limite")

function saiu(){
  let resultado = document.querySelector("#res");
  let valorNovo = parseInt(resultado.textContent) + 1;
  resultado.textContent = valorNovo
  arrowUp.style.visibility = "visible"
  arrowDown.style.visibility = "collapse"
  setTimeout(tirarFlechaVerde, 3000)
  if(valorNovo !== 0){
    mensagemDeErroVagas.style.visibility = "collapse"
  }
  
  const valorInputTransformadoEmNumber = parseInt(valorInpt.value);
  
  if(valorNovo > valorInputTransformadoEmNumber){
    resultado.textContent = valorInputTransformadoEmNumber
    arrowUp.style.visibility = "hidden"
    mensagemDeErroLimite.style.visibility = "visible"
    mensagemDeErroLimite.innerHTML = "Limite de vagas atingido"
    setTimeout(tirarErroLimiteDeVagas, 3000)
  }
}

function tirarErroLimiteDeVagas(){
  mensagemDeErroLimite.style.visibility = "hidden"
}

function tirarFlechaVerde(){
  arrowUp.style.visibility = "hidden"
}

btnSaiu.addEventListener('click', saiu)


/*----------BOTAO VOLTAR-----------------*/
const btnVoltar = document.querySelector("#btnVoltar");

function voltar(){
  window.location.href = "./index.html"
}

btnVoltar.addEventListener("click", voltar)