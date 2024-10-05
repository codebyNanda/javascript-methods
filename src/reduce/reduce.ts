const arrayComum: number[] = [9, 1, 2, 3, 4, 5, 10, 25, 50]

function sum(firstNumber: number, secondNumber: number): number {
  const sumResult = firstNumber + secondNumber
  return sumResult
}

// Exemplo de execução do método reduce - Forma 1
function sumArray(array: number[]): number {
  let accumulator: number = 0
  for (let index = 0; index < array.length; index++) {
    accumulator += array[index] 
  }
  return accumulator
}
console.log(sumArray(arrayComum))

// Exemplo de execução do método reduce - Forma 2
function generic(array: number[], accumulator: number, operation: (firstNumber: number, secondNumber: number) => number): number {
  for (let index = 0; index < array.length; index++) {
    accumulator = operation(accumulator, array[index]) 
  }
  return accumulator
}
console.log(generic(arrayComum, 0, sum))