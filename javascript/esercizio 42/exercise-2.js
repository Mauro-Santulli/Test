class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if (amount<0) {
        throw new Error("This operation should not be possible")
      } else {
        this.#amount += amount;
      }
    } catch(err){
      console.log(err.message);
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    try {
      if (this.#amount < amount) {
        throw new Error("This operation should not be possible, because you cannot withdraw more than the account balance")
      } else {
        this.#amount -= amount;
      }
    } catch(err){
      console.log(err.message);
    }
  }
  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();