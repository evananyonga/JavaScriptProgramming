/* Runtime errors are errors caused by external factors eg poor internet connections. Others can come from wrong input from a user. These can
be handled using if statements or a try and catch function */

const user = {
	firstName: 'Eva',
	lastName: 'Nanyonga',
	age: 30
};

const otherUser = {
	lastName: 'Buchowski',
	age: 35
};

if (otherUser.firstName && otherUser.lastName) {
	console.log(otherUser.firstName + ' ' + otherUser.lastName)
} else {
	alert('Missing one value')
}

// Using a try-catch block

const user = {
	firstName: 'Eva',
	lastName: 'Nanyonga',
	age: 30
};

const otherUser = {
	lastName: 'Buchowski',
	age: 35
};

try {
	console.log(otherUser.firstName + ' ' + otherUser.lastName);
}
catch (error) {
	alert('Missing one value');
	console.log(error);
}