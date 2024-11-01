class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`${this.name} the ${this.species} makes a noise.`);
    }
}


const dog = new Animal('Buddy', 'Dog');
dog.speak(); 
