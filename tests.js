/*
** TESTING
** Unit Test -- Test done on only a single unit e.g. a function or a class. (This makes a case for writing short functions)
*/

// For a function like 

const getWordCount = (stringToCount) => {
	const wordArray = stringToCount.split(' '); // This splits the words to make them ready for the count
	return wordArray.length;
}

// You could write a test like:
const testSimpleWordCount = () => {
	const testString = 'I have four words';
	if (getWordCount(testString) !== 4) {
		console.error('Word count failed!');
	}
}

let myWord = 'Well, that did not go according to plan!';
console.log(testSimpleWordCount(myWord));

// const getLetterCount = (stringToCount) => {
// 	const wordArray = stringToCount.split(' ');
// 	let totalOfLetters = 0;
// 	for (let word of wordArray) {
// 		word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
// 		totalOfLetters += word.length;
// 	}
// 	return totalOfLetters;
// }