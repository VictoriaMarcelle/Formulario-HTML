
let valor1 = parseInt(prompt('Digite o valor da primeira variável'))
let valor2 = parseInt(prompt('Digite o valor da segunda variável'))

alert(`Caso A: Primeira variável é = ${valor1} e a segunda variável é = ${valor2}`)

let valor3 = valor1

valor1 = valor2
valor2 = valor3

alert(`Caso B: Primeira variável é = ${valor1} e a segunda variável é = ${valor2}`)