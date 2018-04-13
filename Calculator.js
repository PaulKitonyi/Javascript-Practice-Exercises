"use strict"

class Calculator{
    add(firstvalue,secondvalue){
        console.log('The sum of ' + firstvalue + '+' + secondvalue + '=',firstvalue + secondvalue);
    }

    subtract(firstvalue,secondvalue){
        console.log('The subtraction of '+ firstvalue + '-' + secondvalue + '=',firstvalue-secondvalue);
    }

    multiply(firstvalue,secondvalue){
        console.log('The  multiplication of '+ firstvalue + 'x'+ secondvalue + '=',firstvalue*secondvalue);
    }

    division(firstvalue,secondvalue){
        console.log('The division of '+ firstvalue + '/' + secondvalue + '=', firstvalue / secondvalue);
    }
}



// For testing purposes
const calculator = new Calculator();
calculator.add(6,5);
calculator.subtract(7,4);
calculator.multiply(6,9);
calculator.division(9,3);