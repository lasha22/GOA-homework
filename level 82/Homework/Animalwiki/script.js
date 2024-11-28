class Animal {
    constructor(name, habitat, diet, specialFeature, image) {
      this.name = name;
      this.habitat = habitat;
      this.diet = diet;
      this.specialFeature = specialFeature;
      this.image = image;
    }
  }
  
  class UI {
    constructor(container) {
      this.container = container;
      this.setupPage();
    }
  
    setupPage() {
      const title = document.createElement("h1");
      title.textContent = "Animal Wiki";
      title.style.color = "#fff";
      title.style.backgroundColor = "#4CAF50";
      title.style.padding = "15px";
      title.style.marginBottom = "20px";
      title.style.textAlign = "center";
      this.container.appendChild(title);
  
      this.cardsContainer = document.createElement("div");
      this.cardsContainer.style.display = "flex";
      this.cardsContainer.style.flexWrap = "wrap";
      this.cardsContainer.style.justifyContent = "center";
      this.cardsContainer.style.gap = "20px";
      this.container.appendChild(this.cardsContainer);
  
      const footer = document.createElement("footer");
      footer.style.marginTop = "20px";
      footer.style.textAlign = "center";
      footer.style.fontSize = "14px";
      footer.style.color = "#666";
  
      const author = document.createElement("p");
      author.textContent = "Author: Herge Refnes";
      footer.appendChild(author);
  
    }
  
    createCard(animal) {
      const card = document.createElement("div");
      card.style.backgroundColor = "#fff";
      card.style.border = "1px solid #ddd";
      card.style.borderRadius = "8px";
      card.style.padding = "15px";
      card.style.width = "250px";
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      card.style.textAlign = "center";
  
      const img = document.createElement("img");
      img.src = animal.image;
      img.alt = animal.name;
      img.style.width = "100%";
      img.style.height = "150px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "8px 8px 0 0";
      card.appendChild(img);
  
      const name = document.createElement("h2");
      name.textContent = animal.name;
      name.style.color = "#333";
      name.style.margin = "15px 0";
      card.appendChild(name);
  
      const habitat = document.createElement("p");
      habitat.textContent = `Habitat: ${animal.habitat}`;
      habitat.style.margin = "5px 0";
      habitat.style.color = "#555";
      card.appendChild(habitat);
  
      const diet = document.createElement("p");
      diet.textContent = `Diet: ${animal.diet}`;
      diet.style.margin = "5px 0";
      diet.style.color = "#555";
      card.appendChild(diet);
  
      const feature = document.createElement("p");
      feature.textContent = `${animal.specialFeature.key}: ${animal.specialFeature.value}`;
      feature.style.margin = "5px 0";
      feature.style.color = "#555";
      card.appendChild(feature);
  
      this.cardsContainer.appendChild(card);
    }
  
    displayAnimals(animals) {
      animals.forEach((animal) => this.createCard(animal));
    }
  }
  
  const animals = [
    new Animal("Tiger", "Forests", "Carnivore", { key: "Has Fur", value: "Yes" }, "https://media.4-paws.org/e/0/f/8/e0f805860bb66fda77f14c5112ebc95f1d62533b/VIER%20PFOTEN_2017-10-20_163-1335x891-600x400.webp"),
    new Animal("Penguin", "Antarctica", "Carnivore", { key: "Can Fly", value: "No" }, "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg"),
    new Animal("Panda", "Forests", "Herbivore", { key: "Has Fur", value: "Yes" }, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/640px-Grosser_Panda.JPG"),
    new Animal("Eagle", "Mountains", "Carnivore", { key: "Can Fly", value: "Yes" }, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1Eh1m881jQpYptpd7P4SAWHIH8mQkc4I0g&s"),
  ];
  
  const container = document.createElement("div");
  container.style.maxWidth = "1200px";
  container.style.margin = "0 auto";
  container.style.padding = "20px";
  container.style.backgroundColor = "#f2f2f2";
  document.body.appendChild(container);
  
  const ui = new UI(container);
  ui.displayAnimals(animals);
  