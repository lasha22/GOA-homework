// Task 1
let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

// Task 2
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021
};

console.log(car.make);   
console.log(car.model);  
console.log(car.year);   

// Task 3
person.age = 31; 

// Task 4
person.hobby = 'Reading'; 

// Task 5
delete person.city; 
// Task 6
let calculator = {
    a: 5,
    b: 10,
    add: function() {
        return this.a + this.b;
    }
};

console.log(calculator.add()); 

// Task 7
let book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    pages: 281
};

let book2 = {
    title: '1984',
    author: 'George Orwell',
    pages: 328
};

let book3 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180
};

// Task 9
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.sound);
    };
}

// Task 10
let cat = new Animal('Cat', 'Meow');
let dog = new Animal('Dog', 'Woof');

cat.makeSound(); 
dog.makeSound(); 

// Task 11
Animal.prototype.changeName = function(newName) {
    this.name = newName;
};

let bird = new Animal('Bird', 'Tweet');
bird.changeName('Parrot');
console.log(bird.name); 
