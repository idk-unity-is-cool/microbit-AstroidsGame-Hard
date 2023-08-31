input.onButtonPressed(Button.A, function () {
    if (dead == 0) {
        if (X > 0) {
            basic.clearScreen()
            X += -1
            led.plot(X, 0)
            led.plot(EnemyX, EnemyY)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (dead == 0) {
        if (X < 4) {
            basic.clearScreen()
            X += 1
            led.plot(X, 0)
            led.plot(EnemyX, EnemyY)
        }
    }
})
let Score = 0
let dead = 0
let EnemyX = 0
let EnemyY = 0
let X = 0
X = 0
EnemyY = 5
EnemyX = randint(0, 4)
basic.forever(function () {
    if (EnemyX == X && EnemyY == 0) {
        dead = 1
    }
    if (dead == 1) {
        basic.showString("" + (Score))
    }
})
basic.forever(function () {
    if (dead == 0) {
        basic.pause(100)
        basic.clearScreen()
        EnemyY += -1
        led.plot(EnemyX, EnemyY)
        led.plot(X, 0)
    }
})
basic.forever(function () {
    if (dead == 0) {
        if (EnemyY < 0) {
            EnemyY = 5
            EnemyX = randint(0, 4)
            Score += 1
        }
    }
})
