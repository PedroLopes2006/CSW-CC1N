function loop(){
    var numero = 0
    for (numero = 0 ; numero <= 1000 ; numero+= 2){
        impar = 999 - numero
        document.writeln(numero + "<br>");
        document.writeln(impar + "<br>");
    }
}
function funcWhile(){
    var number = 0 
    while (number < 25){
    text = "O numero é :" + number + "<br>"
    document.writeln(text)
    number++
    }
}
function theCalculator(){
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)
    theOperation = document.getElementById("operationss").value
    if( theOperation == "adicao"){
        document.writeln(firstNumber + secondNumber)
    }
    else if( theOperation == "subtracao"){
        document.writeln(firstNumber - secondNumber)
    }
    else if ( theOperation == "multiplicacao"){
        document.writeln(firstNumber * secondNumber)
    }
    else{
        document.writeln(firstNumber / secondNumber)
    }
}