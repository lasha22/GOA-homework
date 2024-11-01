class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    haveBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! Now I am ${this.age} years old.`);
    }
}


const john = new Human('lasha', 16);
john.greet();        
john.haveBirthday(); 