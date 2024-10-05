// Exemplo de execução do método FILTER
const filterArray: number[] = [9, 1, 2, 3, 4, 5, 10, 25, 50]

function testeFilter(numero: number): boolean {
  return numero >= 10
}

let itens: number[] = []
function testandoFilterNumerico(array: number[], operation: (item: number) => boolean): number[] | undefined {
  for (let index = 0; index < array.length; index++) {
    if (operation(array[index])) {
      itens.push(array[index])
    }
  }
  return itens
}
console.log(testandoFilterNumerico(filterArray, testeFilter))