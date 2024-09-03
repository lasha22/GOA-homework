function Robot(name,material){
    this.name = name;
    this.material = material;
    
    this.printinfo = function(){
        console.log(this.name, this.material)
    }
}

const robot1 = new Robot("robot", metal)
const robot2 = new Robot("rob", titanium)
const robot3 = new Robot("iron", iron)

console.log(robot3)


// კონსტრუქტორი არის ფუნქცია რომელიც ქმნის ობიექტს

// new შექმნის ახალ ცარიელ ობიექტს რომელსაც გადაცემს კონსტრუქტორს შემდეგ კი კონსტრუქტორი ამ ცარიელი ობიექტის ინიც ინიციალიზებას ანუ კუთვნილებების მინიჭებას აკეთებს
