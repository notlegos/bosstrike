function raiseAlarm (duration: number) {
    Connected.ledBrightness(Connected.DigitalRJPin.J3, true)
    basic.pause(duration)
    Connected.ledBrightness(Connected.DigitalRJPin.J3, false)
}
let thisRead = 0
Connected.laserSensor(Connected.DigitalRJPin.J4, true)
pins.setAudioPinEnabled(false)
Connected.oledClear()
radio.setGroup(80)
let breaks = 0
let lastRead = pins.analogReadPin(AnalogPin.P2)
Connected.showUserNumber(6, lastRead)
while (true) {
    thisRead = pins.analogReadPin(AnalogPin.P2)
    if (thisRead < 100) {
        breaks = breaks + 1
        raiseAlarm(500)
        Connected.showUserNumber(3, breaks)
        Connected.showUserNumber(4, lastRead)
        Connected.showUserNumber(5, thisRead)
    }
    lastRead = thisRead
}
basic.forever(function () {
	
})
