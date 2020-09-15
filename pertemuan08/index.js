let account = {name: "John", expenses: []}
let total = 0;

function addExpenses(description, amount){
    account.expenses.push({description: description, amount: amount})
}

function getAccountSummary(){
    account.expenses.forEach(function(el){
        total=total+el.amount;
    })
    console.log("Total Pengeluaran"+ account.name +" adalah Rp. "+ total);
}

addExpenses("Beli Makanan",15000)
addExpenses("Ongkos",30000)
getAccountSummary();