let voeding = 20
let knuffel = 20
let dood = 0
loops.everyInterval(1000, function () {
    voeding += -1
    knuffel += -1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && dood == 0) {
        voeding += 5
        knuffel += 5
    }
    if (input.buttonIsPressed(Button.A) && dood == 1) {
    	
    }
})
basic.forever(function () {
    if (voeding > 10 || (knuffel > 10 || dood < 0)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if ((voeding < 10 || knuffel < 10) && (voeding > 0 || knuffel > 0)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (voeding == 0 || knuffel == 0) {
        dood = 1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
