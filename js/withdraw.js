document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw = withdrawField.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdraw = withdrawTotal.innerText;

   const withdrawAmount = parseFloat(withdraw) + parseFloat(newWithdraw);
   withdrawTotal.innerText=withdrawAmount;

   const balanceAmount = document.getElementById('balance-total');
   const balance = balanceAmount.innerText;

   const currentBalance = parseFloat(balance) - parseFloat(withdraw);
   balanceAmount.innerText=currentBalance;
    


    withdrawField.value = '';
})