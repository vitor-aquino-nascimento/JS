let num = [5, 8, 3, 9, 1, 2, 9]
num[3] = 6
num.push(7)
num.sort()

for(let pos in num){
    console.log(`A posição ${pos} tem: ${num[pos]}`)
}

//para cada (let)posição (in)EM uma (num)variável composta