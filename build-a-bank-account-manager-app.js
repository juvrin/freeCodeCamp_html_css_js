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
}

const testTransaction = new Transaction("deposit", 100);
// console.log(testTransaction);

const testAccount = new BankAccount();
testAccount.deposit(200);
console.log(testAccount.withdraw(250));
// console.log(testAccount.deposit(0));
console.log(testAccount);