function inserir(){
  var vagas = document.querySelector("#valor").value;
  var res = document.querySelector("#resultado")

  if(vagas == ""){
    alert("[ERRO] Por favor digite um número!")
  } else if(vagas == 0){
    alert('Por favor digite um numero diferente de 0')
    document.querySelector("#valor").value = "";
  } else {
    res.textContent = `${vagas}`
    res.innerHTML += "<br>Vagas disponiveis"
  }
}

function entrou(){
  var vagas = document.querySelector("#valor").value;
      if(vagas.length == 0 || vagas.length == ""){
        alert('Por favor insira um numero antes de usar esse botão')
      } else {
        var elementResultado = document.querySelector("#resultado");
        var valorNovo = parseInt(elementResultado.textContent) - 1;
        if(valorNovo == vagas){
            alert('ERRO vagas alcançadas')
            elementResultado.textContent = Number(valorNovo) - 1
            elementResultado.innerHTML += "<br> Vagas disponiveis"
        }else if (valorNovo <= -1){
          alert('Numero de vagas zerado')
        } else {
          elementResultado.textContent = valorNovo;
          elementResultado.innerHTML += "<br> Vagas disponiveis"
        }
      }
    }

function saiu(){
  var vagas = document.querySelector("#valor").value;
    if(vagas.length == 0 || vagas.length == ""){
      alert('Por favor insira um numero antes de usar esse botão')
    } else {
      var elementResultado = document.querySelector("#resultado");
      var valorNovo = parseInt(elementResultado.textContent) + 1;
      if(valorNovo > vagas){
        alert('Limite de vagas alcançado')
      } else {
        elementResultado.textContent = valorNovo;
        elementResultado.innerHTML += "<br> Vagas disponiveis"
      }
      
    }
}

function limpar(){
  var vagas = document.querySelector("#valor").value;
  if(vagas.length == ""){
    alert('Não tem dados para limpar')
  } else {
    document.querySelector("#valor").value = "";
    document.querySelector("#resultado").textContent = "";
  }
}
