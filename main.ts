for (let index = 0; index < 2; index++) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
basic.showString("Hola!")
basic.showString("La temperatura es:")
basic.showString("" + (input.temperature()))
basic.showString("ºC")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 12) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    } else {
        while (maqueen.Ultrasonic(PingUnit.Centimeters) <= 12) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 80)
        }
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
})
