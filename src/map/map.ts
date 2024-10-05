// Exemplo de execução do método MAP
const mapArray: number[] = [9, 1, 2, 3, 4, 5, 10, 25, 50]
let result: number[] = []

function multiply(numero: number): number {
  return numero * 2
}

function genericMap(array: number[], operation: (item: number) => number): number[] {
  for(let index = 0; index < array.length; index++) {
    result.push(operation(array[index]))
  }
  return result
}
console.log(genericMap(mapArray, multiply))