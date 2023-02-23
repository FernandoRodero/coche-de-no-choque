maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.showString("" + (input.temperature()))
basic.showString("ºC")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 15) {
        while (maqueen.Ultrasonic(PingUnit.Centimeters) > 15) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
    } else {
        while (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 80)
        }
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
})
