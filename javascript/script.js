function inserir(){
    var inputElement =  document.querySelector("#valor")

    console.log(inputElement.value);

    document.querySelector("#resultado").textContent = inputElement.value + '\n' + 'Vagas disponiveis';
}

function entrou (){
    const resultadoElement = document.querySelector("#resultado");

    const novoValor = parseInt(resultadoElement.textContent)-1 + '\n' + 'Vagas disponiveis';
    
    resultadoElement.textContent = novoValor;

    console.log(novoValor)
}

function saiu (){
    const resultadoElement = document.querySelector("#resultado");

    const novoValor = parseInt(resultadoElement.textContent)+1 + '\n' + 'Vagas disponiveis';

    resultadoElement.textContent = novoValor;

    console.log(novoValor)
}

function limpar(){
    document.querySelector("#valor").value = '';
    document.querySelector("#valor").textContent = '';
    document.querySelector("#resultado").textContent = '';
}