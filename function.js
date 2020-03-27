/* Functions can be declared the old-fashioned way of writing the word --function add(num1, num2) {
	do the maths here.
}

However, we are going to use a more modern method of storing the function into a variable */

const calculateAverageRating = (ratings) => {
  
 let sum = 0;
  for (let rating of ratings) {
  	sum += rating; // keeps adding each rating to the sum
  }
 result = sum/ratings.length // Gets the final sum and the index length and stores them into the result variable
 return result;
}

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

console.log(tauAverage)
console.log(colinAverage)


// Instance of a class: Part of a class and acts as a part of a class e.g. newAccount could be an instance of BankAccount class

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log('Balance: ' + this.balance + ' EUR');
    }
    
    deposit(amount) {
        console.log('Depositing ' + amount + ' EUR');
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Withdrawal denied!');
        } else {
            console.log('Withdrawing ' + amount + ' EUR');
            this.balance -= amount;
            this.showBalance();
        }
    }
}

let newAccount = new BankAccount('Eva Nanyonga', 500);

// an instance of a class can also access the other methods of a class e.g. showBalance(), deposit(), etc.


// Modify the code here. Use a class to get ratings 
// ======================

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  addRating(rating) {
    this.ratings.push(rating);
    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }
    this.averageRating = sum / this.ratings.length;
  }
}

// ======================

const tau = new Show('The Story of Tau', 5);
const colin = new Show('The Hero of Old Meldrum', 3);
const clara = new Show('The Bugs of Isla Clara', 6);

const shows = [tau, colin, clara];



/*	#Static Methods 
 	#These create helper methods and differ from instance methods in that you do not need to create an instance of a class to use them. 
A good example of this is the Math method */

const randomNumber = Math.random(); // creates random number on the interval [0, 1)
const roundMeDown = Math.floor(495.966); // rounds down to nearest whole number, returns 495

// You can also create your own static methods
class BePolite {
    static sayHello() {
        console.log('Hello!');
    }
    static sayHelloTo(name) {
        console.log('Hello ' + name + '!');
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // prints 'Hello!'
BePolite.sayHelloTo('Will'); // prints 'Hello Will!'

const sum = BePolite.add(2, 3); // sum = 5

/* The difference can be seen in excecuting the function. You don't have to create an instance of a class. You can just call the 
static method directly */ 
// Static methods help you group by category, types