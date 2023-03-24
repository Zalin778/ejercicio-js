let numeros, suma;
numeros = [1, 3, 7, 8, 9];
for (let a in numeros){
    for (let e in numeros){
        suma = numeros[a] + numeros[e];
        if (suma == 10){
            console.log(`La suma de los números: ${numeros[a]} + ${numeros[e]} es igual a: ${suma}`);
        }
    }
}


