function checkBudget() {
    const budgetInput = document.getElementById('budgetInput').value;
    const budget = parseFloat(budgetInput);

    
    const budgetLimit = 1000;

    
    const resultElement = document.getElementById('result');

    
    if (!isNaN(budget)) {
        if (budget <= budgetLimit) {
            resultElement.textContent = `Your budget of $${budget} is within the limit.`;
        } else {
            resultElement.textContent = `Your budget of $${budget} exceeds the limit of $${budgetLimit}.`;
        }
    } else {
        resultElement.textContent = 'Please enter a valid number.';
    }
}
