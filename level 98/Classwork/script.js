function setBackgroundColor(color) {
  document.body.style.backgroundColor = color; 
}


const colorBoxes = document.querySelectorAll('.color-box');
colorBoxes.forEach(box => {
  box.addEventListener('click', function() {
    const selectedColor = box.getAttribute('data-color');
    setBackgroundColor(selectedColor); lor
  });
});
