



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


    if (inputDigited) {

        document.getElementById('input-calc').value = eval(inputDigited);

    }

    else {
      document.getElementById('input-calc').value = "Nada a calcular"

    }

}