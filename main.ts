input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onButtonPressed(Button.AB, function () {
    number = 0
})
input.onButtonPressed(Button.B, function () {
    number += -1
})
let number = 0
number = 0
basic.forever(function () {
    if (number > 5) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(999999)
        basic.pause(999999)
    }
})
basic.forever(function () {
    basic.showNumber(number)
})
