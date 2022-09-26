// step-1 add event listener to the button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    //step-2 deposit amount 
//if input field use .value or use innerText 
    const depositField = document.getElementById('deposite-field');
    const depositAmount = depositField.value;

    //step-3 get the current deposit total

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;

    // step-4 add number 

    const currentDepositTotal = parseFloat(depositAmount)  + parseFloat(depositTotal);
    depositTotalElement.innerText = currentDepositTotal;

    //step-5 get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = balanceTotalElement.innerText;

    //step-6 calculate current total

    const currentBalance = parseFloat(balanceTotal) + parseFloat (depositAmount);
    balanceTotalElement.innerText = currentBalance;
    

    //step-7
    depositField.value="";
    
})