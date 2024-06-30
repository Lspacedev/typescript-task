"use strict";
//Exercise 1: Create an Enum
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
function robot() {
    let arr = [];
    //put strings in enums in array
    for (let i in TrafficLight) {
        if (typeof TrafficLight[i] === "string") {
            const light = TrafficLight[i];
            arr.push(light);
        }
    }
    const seconds = 10000;
    arr.forEach((light, i) => {
        setTimeout(() => console.log(light), seconds * i);
    });
}
robot();
