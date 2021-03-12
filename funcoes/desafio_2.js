// fuction dentro de function

function calcular(x) {
  return function(y) {
    return function(fn) {
      return fn(x, y)
    }
  }
}

function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

function multiplicar (a, b) {
  return a * b
}

console.log(calcular(3)(4)(somar))
console.log(calcular(3)(4)(subtrair))
console.log(calcular(3)(4)(multiplicar))