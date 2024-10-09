const divElements = document.getElementsByTagName('div');

for (const div of divElements) {
    div.addEventListener('click', () => {
        console.log(`Clicked on div with id: ${div.id}`);
    });
}
