class Animal {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `This is ${this.name}`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    describe() {
        return `${super.describe()} - Dog`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    describe() {
        return `${super.describe()} - Cat`;
    }
}

class Puppy extends Dog {
    constructor(name) {
        super(name);
    }

    describe() {
        return `${super.describe()} - Puppy`;
    }
}

class Kitten extends Cat {
    constructor(name) {
        super(name);
    }

    describe() {
        return `${super.describe()} - Kitten`;
    }
}

const animal = new Animal("Animal");
console.log(animal.describe());

const dog = new Dog("Buddy");
console.log(dog.describe());

const cat = new Cat("Whiskers");
console.log(cat.describe());

const puppy = new Puppy("Max");
console.log(puppy.describe());

const kitten = new Kitten("Luna");
console.log(kitten.describe());
