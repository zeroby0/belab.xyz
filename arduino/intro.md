# Introduction

Arduino is a programmable microcontroller. Much like how you control your computer with programs, you can control an Arduino with a C program. Below is an image of the Arduino _Uno_ microcontroller.

![Arduino image](./intro/arduino.png)

The row of pins on the top, labelled _Digital_, can be set to HIGH or LOW. When a pin is set to `HIGH`, it's voltage is 5 Volt. Likewise, `LOW` pins are at 0 Volt.

The bottom right row of pins, labelled _Analog_, are called the Analog pins (duh). Their value can be set to anywhere between 0 to 1023. When the value is, say, `x`, the voltage of the pin is (x/1023) * 5 Volts.

The behaviour described till now is when the pins are set to the `OUTPUT` mode. When the pins are in `INPUT` mode, the Arduino can read voltage connected to the pins.

For example, if you connect a 1.5 Volt battery to one of the analog pins in `INPUT` mode and tried to read it, the value would be (1.5/5) * 1023. The reading would be `HIGH` if the battery was connected to one of the Digital Pins instead.



#### Install the [Arduino IDE](https://www.arduino.cc/en/Main/Software) on your computer. Follow this [tutorial](https://www.arduino.cc/en/Guide/ArduinoUno) to setup your Arduino.


Let's write our first Arduino program, [LED Blink →](ledblink.md)

