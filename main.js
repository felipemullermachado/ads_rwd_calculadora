function mostraResultado(conta){
    document.getElementById("elementos").innerHTML = `<p>Resultado: ${conta}</p>`;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
 }

 function soma() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var conta = n1 + n2;
    mostraResultado(conta);
 }

 function subtracao() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var conta = n1 - n2 ;
    mostraResultado(conta);
 } 

 function multiplicacao() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var conta = n1 * n2 ;
    mostraResultado(conta);
 } 

 function divisao() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var conta = n1 / n2 ;
    mostraResultado(conta);
 }
