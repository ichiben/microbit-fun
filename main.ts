input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
    basic.showArrow(ArrowNames.West)
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        led.setBrightness(255)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(200)
        led.setBrightness(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.clearScreen()
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(255)
    basic.showArrow(ArrowNames.East)
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        led.setBrightness(50)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    basic.clearScreen()
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
