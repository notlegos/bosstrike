radio.onReceivedValue(function (name, value) {
    Connected.showUserText(1, name)
    Connected.showUserNumber(2, value)
    if (name == "joyCente") {
        neZha.stopAllMotor()
    } else if (name == "joyLeft") {
        if (value >= 2) {
            turnAllWheels(90)
            basic.showArrow(ArrowNames.East)
        } else {
            neZha.stopAllMotor()
        }
    } else if (name == "joyRight") {
        if (value >= 2) {
            turnAllWheels(270)
            basic.showArrow(ArrowNames.West)
        } else {
            neZha.stopAllMotor()
        }
    } else if (name == "joyUp") {
        if (value >= 2) {
            turnAllWheels(0)
            basic.showArrow(ArrowNames.South)
        } else {
            neZha.stopAllMotor()
        }
    } else if (name == "joyDown") {
        if (value >= 2) {
            turnAllWheels(180)
            basic.showArrow(ArrowNames.North)
        } else {
            neZha.stopAllMotor()
        }
    } else if (name == "joyButto") {
        if (value == 5) {
        	
        } else if (value == 6) {
        	
        } else if (value == 2) {
            spinAllWheels(50, 200)
            spinAllWheels(70, 300)
            spinAllWheels(50, 200)
            spinAllWheels(20, 200)
            spinAllWheels(10, 200)
        } else if (value == 3) {
            spinAllWheels(-50, 200)
            spinAllWheels(-20, 200)
            spinAllWheels(-10, 200)
        } else if (value == 1) {
            spinAllWheels(50, 200)
            spinAllWheels(20, 200)
            spinAllWheels(10, 200)
        } else if (value == 4) {
            spinAllWheels(50, 200)
            spinAllWheels(20, 200)
            spinAllWheels(10, 200)
        } else {
        	
        }
    }
})
function turnAllWheels (theAngle: number) {
    neZha.setServoAngle(neZha.ServoTypeList._360, neZha.ServoList.S1, theAngle)
    neZha.setServoAngle(neZha.ServoTypeList._360, neZha.ServoList.S2, theAngle)
    neZha.setServoAngle(neZha.ServoTypeList._360, neZha.ServoList.S3, theAngle)
    neZha.setServoAngle(neZha.ServoTypeList._360, neZha.ServoList.S4, theAngle)
}
function spinAllWheels (speedPercent: number, durationMs: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, speedPercent)
    neZha.setMotorSpeed(neZha.MotorList.M2, speedPercent)
    neZha.setMotorSpeed(neZha.MotorList.M3, speedPercent * -1)
    neZha.setMotorSpeed(neZha.MotorList.M4, speedPercent * -1)
    basic.pause(durationMs)
    neZha.stopAllMotor()
}
radio.setGroup(80)
Connected.oledClear()
turnAllWheels(0)
basic.showArrow(ArrowNames.South)
