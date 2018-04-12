"use strict"
class Car{
    constructor(make, model, year){
        this.make  = make;
        this.model = model;
        this.year  = year;
        this.odometer_reading = 0;
    }

    getDescriptiveName(){
        console.log(this.year + ' ' + this.make + ' '+ this.model)
    }

    readOdometer(){
        console.log('This car has ' + this.odometer_reading + ' miles on it!!!!')
    }

    updateOdometer(mileage){
        if(mileage > this.odometer_reading){
            this.odometer_reading += mileage;
        }
        else{
            console.log('You cant roll back an Odometer!!!!')
        }

    }
}

class ElectricCar extends Car{
    constructor(make, model, year,battery){
        super(make, model, year);
        this.battery = battery;
    }

    batterySize(){
        console.log(this.make + ' ' + this.model + ' ' + 'has a battery of size ' + this.battery+'-KWh')
    }
}
// for testing purpose
const auris = new Car('Toyota', 'Auris', '2010')
auris.getDescriptiveName();
auris.readOdometer();
auris.updateOdometer(100);

// testing ElectricCar sub class
const tesla = new ElectricCar('tesla', 'model s', '2018', '70')
tesla.getDescriptiveName();
tesla.batterySize();
