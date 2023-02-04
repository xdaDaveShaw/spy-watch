input.onButtonPressed(Button.A, function () {
    if (Is_Unlocked == 1) {
        basic.showString("Calling HQ")
        basic.showLeds(`
            . # # # .
            . # # # .
            . # . . .
            . # # # .
            . # # # .
            `)
    } else {
        Unlock_State = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Is_Unlocked == 1) {
        basic.showString("Fire Laser")
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
    } else {
        if (Unlock_State == 2) {
            Unlock_State = 3
            Is_Unlocked = 1
            basic.showLeds(`
                . . # # .
                . . . # .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            Unlock_State = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Is_Unlocked == 1) {
        basic.showString("SECRET FILES")
        basic.showLeds(`
            . . . . .
            . . # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (Unlock_State == 1) {
            Unlock_State = 2
        } else {
            Unlock_State = 0
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    Unlock_State = 0
    Is_Unlocked = 0
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # #
        # # # # #
        # # # # #
        `)
})
let Is_Unlocked = 0
let Unlock_State = 0
Unlock_State = 0
Is_Unlocked = 0
basic.showLeds(`
    . # # # .
    . # . # .
    # # # # #
    # # # # #
    # # # # #
    `)
