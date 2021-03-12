function somar(a){
  return function(b) {
    return function(c) {
        return a + b + c
    }
  }
}

const somarAB = somar(3)(4)
console.log(somarAB(5))

function calcular(x) {
  return function(y) {
    return function(fn) {
      return fn(x, y)
    }
  }
}

function adicao(a, b) {
  return a + b
}

function subtracao(a, b) {
  return a - b
}

function multiplicacao(a, b) {
  return a * b
}

function divisao(a, b) {
  return a / b
}

console.log(adicao(2,4))
console.log(subtracao(2,9))
console.log(multiplicacao(3, 7))
console.log(divisao(59, 4))