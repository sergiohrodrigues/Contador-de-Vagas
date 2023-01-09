/*------------BOTAO INSERIR----------*/
const btnInserir = document.querySelector("#btnInserir");
const valorInpt = document.querySelector("#valorInpt");
const res = document.querySelector("#res");
const principal = document.querySelector("#principal");
const secundaria = document.querySelector(".secundaria");
const error = document.querySelector("#principal__erro");


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
  }else {
    arrowDown.style.visibility = "visible";
    arrowUp.style.visibility = "collapse";
  }
  
  const valorInputTransformadoEmNumber = parseInt(valorInpt.value);
  
  if(valorNovo < valorInputTransformadoEmNumber){
    // mensagemDeErroVagas.style.visibility = "collapse"
    mensagemDeErroLimite.style.visibility = "hidden"
  }
  
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
  
  if(valorNovo !== 0){
    mensagemDeErroVagas.style.visibility = "collapse"
  }

  const valorInputTransformadoEmNumber = parseInt(valorInpt.value);
  
  if(valorNovo > valorInputTransformadoEmNumber){
    resultado.textContent = valorInputTransformadoEmNumber
    mensagemDeErroLimite.style.visibility = "visible"
    mensagemDeErroLimite.innerHTML = "Limite de vagas do estabelecimento"
  }
}

btnSaiu.addEventListener('click', saiu)


/*----------BOTAO VOLTAR-----------------*/
const btnVoltar = document.querySelector("#btnVoltar");

function voltar(){
  window.location.href = "./index.html"
}

btnVoltar.addEventListener("click", voltar)