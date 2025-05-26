function calculate(){
    var number1 = Number(document.getElementById("numero1").value)
    var number2 = Number(document.getElementById("numero2").value)
    var operation = document.getElementById("operacao_escolhida").value
    switch (operation){
        case "SUM": document.getElementById("resultado").innerText = number1 + number2; break
        case "SUB": document.getElementById("resultado").innerText = number1 - number2; break
        case "DIV": document.getElementById("resultado").innerText = number1 / number2; break
        case "MULT": document.getElementById("resultado").innerText = number1 * number2; break
    }
}