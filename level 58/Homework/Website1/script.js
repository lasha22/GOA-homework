
function checkBudget() {
    
    const budget = parseFloat(document.getElementById('budget').value);
    
    
    const phonePrice = 500;
    
   
    if (budget >= phonePrice) {
        console.log("You can buy the phone!");
    } else {
        console.log("Sorry, you don't have enough budget to buy the phone.");
    }
}
