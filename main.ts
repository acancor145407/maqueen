function girar90dcha () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
    basic.pause(350)
}
function girar90izq () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
    basic.pause(350)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
    basic.pause(350)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(50)
        girar90izq()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.pause(800)
        girar90dcha()
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.pause(50)
    }
})
