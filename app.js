// player list create and display part  start
const nameArry = [];
function displayList (list){
    const tableBody = document.getElementById('name-list');
    tableBody.innerHTML = '';
    for (i= 0; i<list.length; i++){
        const name = nameArry[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
        
    }
}


function playerName(element){
    
    const playerName =element.parentNode.parentNode.children[0].innerText;

    const playerObject ={
        playerName: playerName
    }
    nameArry.push(playerObject);
    document.getElementById('total-plyer').innerHTML = nameArry.length;
    displayList(nameArry);
    
    const numberString = document.getElementById('total-plyer').innerText;
    const number = parseInt(numberString);
    if (number > 5) {
        alert('top 5 player select');
        return number;
    }
    element.disabled = true;
}
// player list create and display part  end
    
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

// Budget part start 
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
// Budget part end

