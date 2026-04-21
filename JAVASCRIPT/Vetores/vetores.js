let lista = [1,0,1,0,1,1,1,1,0,1,1,0];

cont = 0;
cont1 = 0;

for (i = 0; i < lista.length; i++) {
    if (lista[i] == 0) {
       let cont = cont + 1; 
    }
    else if (lista[i] == 1) {
       let cont1 = cont1 + 1;
    }
}

console.log("O número 0 aparece " + cont + "vezes e o número 1 aparce" + cont1 + "vezes")