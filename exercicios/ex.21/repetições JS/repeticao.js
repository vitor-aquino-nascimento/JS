/*
var c = 1

while (c <= 8) {
    console.log(`você comeu ${c} pizzas`)
    c++
}
*/

/*
var c = 1

do {
    console.log(`passo${c}`)
    c++
} while(c <= 2)
 */


var pizza = 1
var res = document.getElementById('resp')

function comer() {
        while (pizza <= 8) {
            res.innerHTML += `<p>você comeu ${pizza} pizza</p>`
            pizza++
        }
}