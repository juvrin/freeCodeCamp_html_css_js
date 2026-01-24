class Transaction{
  constructor(type,amount){
    this.type = type;
    this.amount = amount;
  }
}

class BankAccount{
  constructor(){
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depAmount){
    if(depAmount > 0){
      let newTrans = new Transaction("deposit", depAmount)
      this.transactions.push(newTrans);
      this.balance += depAmount;
      return `Successfully deposited \$${depAmount}. New balance: \$${this.balance}`;
    }else{
      return "Deposit amount must be greater than zero."
    }
  }

  withdraw(withdrawAmount){
    if(withdrawAmount > 0 && this.balance >= withdrawAmount){
      let newTrans = new Transaction("withdraw", withdrawAmount)
      this.transactions.push(newTrans);
      this.balance -= withdrawAmount;
      return `Successfully withdrew \$${withdrawAmount}. New balance: \$${this.balance}`;
    }
    if (withdrawAmount <= 0 || this.balance < withdrawAmount){
      return "Insufficient balance or invalid amount."
    }
  }

  checkBalance(){
    return `Current balance: \$${this.balance}`;
  }

  listAllDeposits(){
    let outString = "Deposits: "
    this.transactions.filter((transaction) => transaction.type === "deposit").forEach((transaction) => outString += `${transaction.amount},`)
    outString = outString.replace(/,\s*$/, "");
  return outString;
  }

  listAllWithdrawals(){
    let outString = "Withdrawals: "
    this.transactions.filter((transaction) => transaction.type === "withdraw").forEach((transaction) => outString += `${transaction.amount},`)
    outString = outString.replace(/,\s*$/, "");
  return outString;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(200);
myAccount.deposit(100);
myAccount.deposit(500);
myAccount.withdraw(50);
myAccount.withdraw(50);
myAccount.withdraw(50);
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());