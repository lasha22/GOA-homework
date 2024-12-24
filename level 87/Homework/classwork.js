// 1) 
const countriesMap = new Map();
countriesMap.set('Georgia', 'Tbilisi');
countriesMap.set('France', 'Paris');
countriesMap.set('Italy', 'Rome');

// Print all pairs
console.log("1) Countries and their capitals:");
countriesMap.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});

// 2) 
const cityMap = new Map();
cityMap.set('Tbilisi', 'Georgia');
cityMap.set('Paris', 'France');
cityMap.set('Rome', 'Italy');


const hasKey = cityMap.has('Tbilisi');
console.log(`\n2) Does the key "Tbilisi" exist? ${hasKey}`);

// 3) 
const studentScores = new Map();
studentScores.set('Alice', 95);
studentScores.set('Bob', 89);
studentScores.set('Charlie', 72);


const bobScore = studentScores.get('Bob');
console.log(`\n3) Bob's score is: ${bobScore}`);

// 4) 
console.log("\n4) List of countries (keys):");
for (let country of countriesMap.keys()) {
    console.log(country);
}

// 5) 
cityMap.delete('Paris');
console.log("\n5) Updated cityMap after deleting 'Paris':");
cityMap.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});

// 6) 
const productMap = new Map();
productMap.set('Laptop', 1200);
productMap.set('Smartphone', 800);
productMap.set('Tablet', 400);


console.log(`\n6) Size of the productMap: ${productMap.size}`);

// 7) 
productMap.set('Laptop', 1100);  
console.log("\n7) Updated productMap after changing the price of Laptop:");
productMap.forEach((price, product) => {
    console.log(`${product}: $${price}`);
});

// 8) 
const emptyMap = new Map();
const isEmpty = emptyMap.size === 0;
console.log(`\n8) Is the emptyMap empty? ${isEmpty}`);

// 9)
const productObject = {
    'Laptop': 1200,
    'Smartphone': 800,
    'Tablet': 400
};


const productMapFromObject = new Map(Object.entries(productObject));
console.log("\n9) Converted Map from Object:");
productMapFromObject.forEach((price, product) => {
    console.log(`${product}: $${price}`);
});

// 10) 
const mapToClear = new Map();
mapToClear.set('Apple', 1);
mapToClear.set('Banana', 2);
mapToClear.set('Cherry', 3);


mapToClear.clear();
const isMapEmpty = mapToClear.size === 0;
console.log(`\n10) Is the mapToClear empty after clear()? ${isMapEmpty}`);
