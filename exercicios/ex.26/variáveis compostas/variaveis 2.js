let num = [5, 8, 3, 9, 1, 2, 9]
num[3] = 6
num.push(7)
num.sort()
num.indexOf(7)
num.indexOf(3)

let pos = num.indexOf(10)
console.log(`O valor 8 está ${pos}`)
console.log(`${num.length}`)