class User {
    constructor(username, email) {
      this.username = username;
      this.email = email;
    }
  
    getProfile() {
      return `Username: ${this.username}, Email: ${this.email}`;
    }
  }
  
  
  class Page {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  
    render() {
      return `
        <div class="page">
          <div class="header">${this.title}</div>
          <p>${this.content}</p>
        </div>
      `;
    }
  }
  
  
  class Website {
    constructor(name) {
      this.name = name;
      this.pages = [];
      this.users = [];
    }
  
    
    addPage(page) {
      this.pages.push(page);
    }
  
    
    addUser(user) {
      this.users.push(user);
    }
  
    
    renderWebsite() {
      let websiteContent = `<h1>Welcome to ${this.name}</h1>`;
      
      
      websiteContent += `<h2>Users:</h2><ul>`;
      this.users.forEach(user => {
        websiteContent += `<li>${user.getProfile()}</li>`;
      });
      websiteContent += `</ul>`;
  
      
      this.pages.forEach(page => {
        websiteContent += page.render();
      });
  
      return websiteContent;
    }
  }
  

  const myWebsite = new Website('My Awesome Website');
  
  const user1 = new User('lizi', 'lizi@example.com');
  const user2 = new User('lasha', 'lasha@example.com');
  
 
  myWebsite.addUser(user1);
  myWebsite.addUser(user2);
  

  const homePage = new Page('Home', 'Welcome to the homepage of our awesome website!');
  const aboutPage = new Page('About Us', 'We are a team of passionate developers.');
  const contactPage = new Page('Contact Us', 'Feel free to reach us via email!');
  

  myWebsite.addPage(homePage);
  myWebsite.addPage(aboutPage);
  myWebsite.addPage(contactPage);
  

  document.getElementById('website-content').innerHTML = myWebsite.renderWebsite();
  