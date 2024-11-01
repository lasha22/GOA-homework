class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    accelerate(amount) {
        this.speed += amount;
        console.log(`Accelerating to ${this.speed} km/h.`);
    }

    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Slowing down to ${this.speed} km/h.`);
    }
}


const myCar = new Car('Toyota', 'Corolla', 2021);
myCar.accelerate(50); 
myCar.brake(20);      
