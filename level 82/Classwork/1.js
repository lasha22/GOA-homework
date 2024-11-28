const array = [
    { name: '', age: '' },
    { name: '', age: '' },
    { name: '', age: '' }
  ];
  
  
  const names = ['lasha', 'lizi', 'luka'];
  const ages = [16, 12, 18];
  
 
  for (let i in array) {
    array[i].name = names[i];
    array[i].age = ages[i];
  }
  
  console.log(array);
  