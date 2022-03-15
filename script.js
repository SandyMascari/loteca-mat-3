var numSorteio = []
var numEscolhido = []

function sorteio (){
    var cont = 0
    numSorteio = []

    while(cont < 6){
        let num = Math.random()*60
        num = Math.ceil(num)
        if(!numSorteio.includes(num)){
            numSorteio[cont] = num
            console.log(numSorteio) 
            cont++
        } 
    } 
    document.getElementById("sorteados").innerHTML = numSorteio
}
function getValor(valor, posicao){
    valor = Number(valor)
    if(valor <= 0 || valor > 60){
        alert("Número inválido, digite um número entre 1 e 60.")
        document.getElementById(`num${posicao+1}`).value = ""
    }else if(numEscolhido.includes(valor)){
        alert("Número repetido, escolha um outro número novamente!")
        document.getElementById(`num${posicao+1}`).value = ""
    }else{
        numEscolhido[posicao] = valor
        console.log(numEscolhido)
    }
}
function contAcertos(){
    var contAcert = 0
    numEscolhido.forEach(function(value, index){
        if(numSorteio.includes(value)){
            contAcert = contAcert + 1
        }
    })
    document.getElementById("acertos").innerHTML = contAcert
}