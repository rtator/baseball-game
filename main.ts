/**
 * hitting and throwing the ball as well as most of the gameplay
 */
/**
 * move ball code
 */
/**
 * base pictures
 */
/**
 * setting every thing up
 */
let ball: game.LedSprite = null
let pitcher = game.createSprite(2, 1)
let batter = game.createSprite(2, 3)
let isplayerpitcher = true
let catcher = game.createSprite(2, 4)
let isballout = false
let peopleonbase = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && isplayerpitcher) {
        if (input.buttonIsPressed(Button.A)) {
            isballout = true
            ball = game.createSprite(2, 1)
            basic.pause(100)
        }
    } else if (input.isGesture(Gesture.Shake) && !(isplayerpitcher)) {
        if (input.buttonIsPressed(Button.B)) {
            if (isballout) {
                if (ball.get(LedSpriteProperty.Y) == 3) {
                    isballout = false
                    peopleonbase += 1
                    ball.delete()
                }
            }
        }
    }
})
basic.forever(function () {
    if (isballout) {
        basic.pause(500)
        ball.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (peopleonbase == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . #
            . . # . .
            . . # . .
            `)
    } else if (peopleonbase == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . #
            . . # . .
            . . # . .
            `)
    } else if (peopleonbase == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else if (peopleonbase == 3) {
        basic.showString("you win! ")
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
})
