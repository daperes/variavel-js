
function armazenaValor(){
    // armazena o valor que o usuario digitou
    var userInput = document.getElementById("userInput").value;

    // recebe o valor inserido
    console.log("O valor da variavel é: " + userInput);

    // atualiza o resultado
    document.getElementById("valorInserido").innerText = "O valor inserido é: " + userInput;
}
