let factor_1 = 0
let factor_2 = 0
let producto = 0
input.onButtonPressed(Button.A, () => {
    factor_1 = randint(0, 9)
    factor_2 = randint(0, 9)
    basic.showNumber(factor_1)
    basic.pause(200)
    basic.showString("x")
    basic.pause(200)
    basic.showNumber(factor_2)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    producto = factor_1 * factor_2
    basic.showNumber(producto)
    basic.pause(200)
    basic.clearScreen()
})