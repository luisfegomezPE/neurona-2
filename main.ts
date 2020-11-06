function aprendizaje () {
    w1 += error * s1
    w2 += error * s2
    bias += error
}
function procesamiento () {
    sumaponderada = s1 * w1 + s2 * w2
    n = sumaponderada + (0 + 0)
    if (n > 0 || n == 0) {
        a = 1
    } else {
        a = -1
    }
}
let n = 0
let sumaponderada = 0
let contador = 0
let a = 0
let error = 0
let target = 0
let s2 = 0
let s1 = 0
let bias = 0
let w2 = 0
let w1 = 0
if (input.buttonIsPressed(Button.A)) {
    w1 = 0.25
    w2 = 0.35
    bias = -0.5
    for (let index = 0; index < 12; index++) {
        s1 = pins.digitalReadPin(DigitalPin.P0)
        s2 = pins.digitalReadPin(DigitalPin.P1)
        procesamiento()
        target = pins.digitalReadPin(DigitalPin.P2)
        error = target - a
        contador = contador + 1
        aprendizaje()
    }
}
if (input.buttonIsPressed(Button.AB)) {
    w1 = 0.25
    w2 = 0.35
    bias = -0.5
    s1 = pins.digitalReadPin(DigitalPin.P0)
    s2 = pins.digitalReadPin(DigitalPin.P1)
    basic.showNumber(a)
    basic.pause(2000)
}
