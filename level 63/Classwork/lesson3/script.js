let date = 0;
setInterval(function(){
    date ++;
    console.log("Current minutes are " + date);
    if(date === 34){
        console.log("Time up");
        clearInterval();
    }

},600) 
  
