// Exemplo de execução do método FIND
const findArray: number[] = [9, 1, 2, 3, 4, 5, 10, 25, 50]

function testeFind(numero: number): boolean {
  return numero > 4
}

function manualFind(array: number[], operation: (item: number) => boolean): number | undefined {
  for(let index = 0; index < array.length; index++) {
    if (operation(array[index])) {
      return array[index]
    }
  }
}
console.log(manualFind(findArray, testeFind))