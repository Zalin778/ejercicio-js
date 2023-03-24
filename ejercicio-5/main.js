var array = [1, 2, 3, 4, 4, 4];
var arreglo = [];
console.log (array); 
for (var i in array) {
    arreglo[i] = 0;
}
for (var a in array) {
    arreglo[array[a]] ++;
     
}
for (var e in array){
    console.log (e+": "+"* ".repeat(arreglo[e]));
    
}