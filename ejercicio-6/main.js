const arr = [1,2,3,3,4,5,6];
const count = {};

// contar la cantidad de veces que se repite cada número en el array
for (let i = 0; i < arr.length; i++) {
  if (count[arr[i]]) {
    count[arr[i]]++;
  } else {
    count[arr[i]] = 1;
  }
}

let num = arr[0];
let maxCount = 1;

// buscar el número con la mayor cantidad de repeticiones
for (let key in count) {
  if (count[key] > maxCount) {
    num = key;
    maxCount = count[key];
  }
}

console.log(`El número que más se repite es: ${num} se repite: ${maxCount}`);
