let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 5)
    if (1 == number) {
        basic.showString("Ano")
    } else if (2 == number) {
        basic.showString("Ne")
    } else if (3 == number) {
        basic.showString("Urcite Ne")
    } else if (4 == number) {
        basic.showString("Urcite Ano")
    } else if (5 == number) {
        basic.showString("Nevim")
    }
})
