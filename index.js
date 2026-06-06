



function eraserOne() {

    var textoApagar = document.getElementById('input-calc');//inpt mapeado

    var inputEraser = textoApagar.value;//peguei o valor do input

    var resultado = inputEraser.slice(0, -1);//peguei o valor do input e usei o slice para tirar um valor(só funciona com o valor)

    textoApagar.value = resultado;//substituindo o valor do input
}


function del() {
    document.getElementById('input-calc').value = "";//apenas zerei o valor


}


function insert(num) {

    document.getElementById('input-calc').value += num;//valor colocado no input +=significa adicionar várias unidades

}

function nowDivision(divisionNumber) {
    document.getElementById('input-calc').value += divisionNumber;
}


function nowMulti(multiNumber) {
    document.getElementById('input-calc').value += multiNumber;
}



function calcSubtratc(subtractCalculator) {
    document.getElementById('input-calc').value += subtractCalculator;

}


function calcMore(calculatorMore) {
    var moreCalculator = document.getElementById('input-calc').value += calculatorMore;

}


function resultFinal() {
    var inputDigited = document.getElementById('input-calc').value;//valor mapeado

    if (inputDigited.includes("+")) {

        var partes = inputDigited.split("+");//aqui ele vai separar os valores a partir do +

        var num1 = Number(partes[0]);//Valore da esquerda convertido para número
        var num2 = Number(partes[1]);//valor  da direita convertido para numero
        var num3 = Number(partes[2]);
        var resultadoCalc = num1 + num2 + num3;//calculando o resultado 

        document.getElementById('input-calc').value = resultadoCalc;//resultado final no input
        ;
    }

    else if (inputDigited.includes("-")) {

        var partesSubstract = inputDigited.split("-");

        var numberCalcSub1 = Number(partesSubstract[0]);
        var numberCalcSu2 = Number(partesSubstract[1]);
        var numberCalcSu3 = Number(partesSubstract[2]);
        var resultSubtract = numberCalcSub1 - numberCalcSu2 - numberCalcSu3;

        document.getElementById('input-calc').value = resultSubtract;
    }

    else if (inputDigited.includes("*")) {

        var partesMulti = inputDigited.split("*");
        var numberCalcMulti1 = Number(partesMulti[0]);
        var numberCalcMulti2 = Number(partesMulti[1]);
        var numberCalcMulti3 =Number(partesMulti[2]);

        resultMulti = numberCalcMulti1 * numberCalcMulti2 * numberCalcMulti3;

        document.getElementById('input-calc').value = resultMulti;
    }

    else if (inputDigited.includes("/")) {

        var partesDiv = inputDigited.split("/");
        var numberCalcDiv1 = Number(partesDiv[0]);
        var numberCalcDiv2 = Number(partesDiv[1]);
        var numberCalcDiv3 = Number(partesDiv[2]);

        resultDiv = numberCalcDiv1 / numberCalcDiv2 /numberCalcDiv3;
 
        document.getElementById('input-calc').value = resultDiv;
    }
}