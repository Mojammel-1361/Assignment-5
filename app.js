const nameArry = [];

function playerName(element){
    
    const playerName =element.parentNode.parentNode.children[0].innerText;
    nameArry.push(playerName);
    document.getElementById('total-plyer').innerHTML = nameArry.length;
    console.log(playerName);
}
// player calculated part start 
document.getElementById('calculated').addEventListener('click', function(){
    const playerCostInput = document.getElementById('player-cost');
    const playerCost = playerCostInput.value;
    
    const totelPlayer = document.getElementById('total-plyer').innerText;

    const playerExpenses =document.getElementById('player-expenses');
    
    const cost = playerCost * totelPlayer;
    
    playerExpenses.innerText = cost;
})
// player calculated part end

document.getElementById('total-calculated').addEventListener('click', function(){
    const managerCostInput = document.getElementById('manager-cost').value;
    const managerCost = parseInt(managerCostInput);
    const coachCostInput = document.getElementById('coach-cost').value;
    const coachCost = parseInt(coachCostInput);

    const playerExpensesInput = document.getElementById('player-expenses').innerText;
    const playerExpenses = parseInt(playerExpensesInput);

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = playerExpenses + managerCost + coachCost;

    
})

