input.onPinPressed(TouchPin.P0, function () {
    led.plot(0, 0)
    OLED.init(128, 64)
    bluetooth.startLEDService()
    bluetooth.advertiseUrl(
    "https://makecode.com",
    7,
    false
    )
    OLED.drawLine(
    0,
    0,
    20,
    20
    )
    basic.showLeds(`
        . # # # .
        # # . . .
        # . . # #
        # # . . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # . .
        # . . . .
        . . # # .
        # . . . .
        # # # . .
        `)
    basic.pause(100)
})
input.onPinPressed(TouchPin.P2, function () {
    if (cycle == 1) {
        ctb = images.createBigImage(`
            . . . . . . . # # .
            . . . . . . # . . .
            . . . . . . # . . .
            . . . . . . # . . .
            . . . . . . . # # .
            `)
        ctb0 = images.createBigImage(`
            # # # . # # # . # .
            . # . . . # . . . #
            . # . . . # . . . #
            . # . . . # . . . #
            # # # . . # . . . #
            `)
        ctb1 = images.createBigImage(`
            # . # # . . # . . #
            . . # . # . # . . #
            . . # # . . # . . #
            . . # . # . # . . #
            . . # # . . . # # .
            `)
        ctb2 = images.createBigImage(`
            . . # # . . . # # #
            . # . . . . # # . .
            . . # . . . # . . #
            . . . # . . # # . .
            . # # . . . . # # #
            `)
        ctb3 = images.createBigImage(`
            . . . . # # # . . .
            . . . # # . . . . .
            . . . # . . # # . .
            . . . # # . . . . .
            . . . . # # # . . .
            `)
        ctb.scrollImage(1, 200)
        ctb0.scrollImage(1, 200)
        ctb1.scrollImage(1, 200)
        ctb2.scrollImage(1, 200)
        ctb3.showImage(3, 200)
        cycle = 1
    } else {
        ctb = images.createBigImage(`
            . # # # . . . # # .
            # # . . . . # . . .
            # . . # # . # . . .
            # # . . . . # . . .
            . # # # . . . # # .
            `)
        ctb0 = images.createBigImage(`
            # # # . # # # . # .
            . # . . . # . . . #
            . # . . . # . . . #
            . # . . . # . . . #
            # # # . . # . . . #
            `)
        ctb1 = images.createBigImage(`
            # . # # . . # . . #
            . . # . # . # . . #
            . . # # . . # . . #
            . . # . # . # . . #
            . . # # . . . # # .
            `)
        ctb2 = images.createBigImage(`
            . . # # . . . # # #
            . # . . . . # # . .
            . . # . . . # . . #
            . . . # . . # # . .
            . # # . . . . # # #
            `)
        ctb3 = images.createBigImage(`
            . . . . # # # . . .
            . . . # # . . . . .
            . . . # . . # # . .
            . . . # # . . . . .
            . . . . # # # . . .
            `)
        ctb.scrollImage(1, 200)
        ctb0.scrollImage(1, 200)
        ctb1.scrollImage(1, 200)
        ctb2.scrollImage(1, 200)
        ctb3.showImage(3, 200)
        cycle = 1
    }
})
function doSomething (image: Image) {
	
}
input.onPinPressed(TouchPin.P1, function () {
    ctb = images.createBigImage(`
        . # # # . . . # # .
        # # . . . . # . . .
        # . . # # . # . . .
        # # . . . . # . . .
        . # # # . . . # # .
        `)
    ctb0 = images.createBigImage(`
        # # # . # # # . # .
        . # . . . # . . . #
        . # . . . # . . . #
        . # . . . # . . . #
        # # # . . # . . . #
        `)
    ctb1 = images.createBigImage(`
        # . # # . . # . . #
        . . # . # . # . . #
        . . # # . . # . . #
        . . # . # . # . . #
        . . # # . . . # # .
        `)
    ctb2 = images.createBigImage(`
        . . # # . . . # # #
        . # . . . . # # . .
        . . # . . . # . . #
        . . . # . . # # . .
        . # # . . . . # # #
        `)
    ctb3 = images.createBigImage(`
        . . . . # # # . . .
        . . . # # . . . . .
        . . . # . . # # . .
        . . . # # . . . . .
        . . . . # # # . . .
        `)
    ctb.scrollImage(1, 200)
    ctb0.scrollImage(1, 200)
    ctb1.scrollImage(1, 200)
    ctb2.scrollImage(1, 200)
    ctb3.showImage(3, 200)
})
let ctb3: Image = null
let ctb2: Image = null
let ctb1: Image = null
let ctb0: Image = null
let ctb: Image = null
let cycle = 0
if (true) {
	
} else {
    OLED.init(128, 64)
    OLED.writeNum(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        `)
    OLED.init(128, 64)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        . # # . .
        `)
    led.plotBarGraph(
    0,
    0
    )
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . # # . .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . # # . .
        # # . . #
        . # . . .
        `)
    basic.showLeds(`
        . . # # #
        . # # . .
        # # . . #
        . # # . .
        . . # # #
        `)
    basic.showLeds(`
        . # # # .
        # # . . .
        # . . # .
        # # . . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        . . # . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . # . . .
        . . . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . # # . .
        # # . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . # # . .
        # # . . #
        . # . . .
        `)
    basic.showLeds(`
        . . # # #
        . # # . .
        # # . . #
        . # # . .
        . . # # #
        `)
    basic.showLeds(`
        . # # # .
        # # . . .
        # . . # .
        # # . . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        . . # . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . # . . .
        . . . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
