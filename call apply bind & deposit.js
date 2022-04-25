// task - 1
// difference between call(), apply() and bind() methods

// call() method
// The call() method takes arguments separately

// Example of call method

const obj1 = {
  firstName: 'kumaran',
  lastName: 'vijay',
  fullName: function (gender) {
    return `Name is: ${this.firstName}, ${this.lastName} and gender is: ${gender}`
  },
}
const obj2 = {
  firstName: 'Vikram',
  lastName: 'S',
}
console.log(obj1.fullName.call(obj2, 'Male'))

// apply() method
// The apply() method takes arguments as an array

// Example of apply method

const obj3 = {
  firstName: 'Raj',
  lastName: 'Kumar',
}
console.log(obj1.fullName.apply(obj3, ['Male']))

// bind() Method
// Bind returns a new function, allowing you to pass in a this array and any number of arguments

// Example of bind method

const obj4 = {
  firstName: 'Prakash',
  lastName: 'Raj',
}

let result = obj1.fullName.bind(obj4, 'Male')

console.log(result())

// ----------------------------------------------------------------------------------------------

// task - 2
// Deposit

class Account {
  constructor(name, accno, balance) {
    this.name = name
    this.accno = accno
    this.balance = balance
  }
  getBalance() {
    return `Your balance is: ${this.balance}`
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount
      return this.getBalance()
    } else {
      return `Insufficient balance. ${this.getBalance()}`
    }
  }
  deposit(addAmount) {
    this.balance = this.balance + addAmount
    return this.getBalance()
  }
}

const thoddusamy = new Account('Thoddusamy', 700, 1_50_000)
const Vikram = new Account('Vikram', 701, 2_00_000)
const Kumaran = new Account('Kumaran', 702, 80_000)

console.log(thoddusamy.getBalance())
console.log(Vikram.getBalance())
console.log(Kumaran.getBalance())

console.log(thoddusamy.withdraw(10_000))
console.log(thoddusamy.getBalance())

console.log(thoddusamy.deposit(40_000))
console.log(thoddusamy.getBalance())

console.log(thoddusamy.deposit(30_000))
console.log(thoddusamy.getBalance())
