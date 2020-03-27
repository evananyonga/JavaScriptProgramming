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