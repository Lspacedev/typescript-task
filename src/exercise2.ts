//Exercise 2: Basic Calculator with Class and Interfaces

interface ICalculator {

    add(num1: number, num2: number): number;
  
    sub(num1: number, num2: number): number;

    divide(num1: number, num2: number): number | string;
  
    multiply(num1: number, num2: number): number;
}

//implementation

class Calculator implements ICalculator{

    add = (num1:number, num2:number) :number => {
        return num1 + num2;
        
    } 
      
    sub = (num1:number, num2:number) :number => {
        return num1 - num2;
        
    } 

    divide = (num1: number, num2: number): number|string => {
        if (num2 == 0) {
            return "Error! Cannot divide by 0!";
        } else {
            return num1 / num2;
        }
        
        
    } 
      
    multiply = (num1:number, num2:number) :number => {
        return num1 * num2;
        
    } 
    
}
