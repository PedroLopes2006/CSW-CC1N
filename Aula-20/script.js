
function showAge(){
    var idadePessoa = document.getElementById("idade").value
    if (idadePessoa > 1 && idadePessoa < 11){
        window.alert("Você é criança")
    }
    else if (idadePessoa > 10 && idadePessoa < 15){
        window.alert("Você é um adolescente")
    }
    else if (idadePessoa > 15 && idadePessoa < 30){
        window.alert("Você é Jovem")
    }
    else if (idadePessoa > 29 && idadePessoa < 60){
        window.alert("Você é adulto")
    }
    else if (idadePessoa > 60){
        window.alert("Você é idoso")
    }
    else{
        window.alert("Erro")
    }
}