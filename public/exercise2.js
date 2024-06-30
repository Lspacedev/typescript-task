"use strict";
//Exercise 2: Basic Calculator with Class and Interfaces
//implementation
class Calculator {
    constructor() {
        this.add = (num1, num2) => {
            return num1 + num2;
        };
        this.sub = (num1, num2) => {
            return num1 - num2;
        };
        this.divide = (num1, num2) => {
            if (num2 == 0) {
                return "Error! Cannot divide by 0!";
            }
            else {
                return num1 / num2;
            }
        };
        this.multiply = (num1, num2) => {
            return num1 * num2;
        };
    }
}
