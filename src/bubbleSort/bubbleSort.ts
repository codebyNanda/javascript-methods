// Bubble sort: é uma forma de ordenação.
const arrayTeste1: number[] = [254, 345, 384, 230, 358, 490, 356, 262, 487, 314]
const arrayTeste2: number[] = [945, 993, 963, 809, 999, 872, 982, 953, 992, 827]

function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`i: ${i}, j: ${j}`)
      if (array[i] < array[j]) {
        swap(array, i, j)
      } 
    }
  }
  console.log(array)
  return array
}
bubbleSort(arrayTeste1)

// Swap: é o conceito de trocar a posição nos elementos do array.
function swap(array: number[], firstIndex: number, secondIndex: number): void {
  const temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}