document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('toggleParagraph');
    const image = document.getElementById('myImage');

    
    paragraph.addEventListener('click', () => {
    
        if (image.style.display === 'none') {
            image.style.display = 'block'; 
        } else {
            image.style.display = 'none'; 
        }
    });
});
