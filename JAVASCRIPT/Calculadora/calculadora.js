//SOMA
function somar() {
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    let soma = n1 + n2

    document.getElementById("resultado").innerHTML = n1 + "+" + n2 + " = " + soma
}

//SUBTRAÇÂO
function subtrair(n1, n2) {
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    let subbtrair = n1 - n2

    document.getElementById("resultado").innerHTML = n1 + "-" + n2 + " = " + subbtrair
}

//DIVISÃO
function dividir(n1, n2) {
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    let dividir = n1 / n2

    document.getElementById("resultado").innerHTML = n1 + "/" + n2 + " = " + dividir
}

//MULTIPLICAÇÃO
function multiplicar(n1, n2) {
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    let multiplicar = n1 * n2
    
    document.getElementById("resultado").innerHTML = n1 + "x" + n2 + " = " + multiplicar
}

