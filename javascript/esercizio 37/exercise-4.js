class BankAccount{
    constructor(saldo){
        this.saldo=saldo;
    }

    deposit(importo){
        this.saldo+=importo
    }

    withdraw(importo){
        this.saldo-=importo
    }

    view(){
        console.log(`Saldo: ${this.saldo}`);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();