const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
	console.log("Passenger Boarded!")
}


// for in loop
const passengers = ['Will Alexander', 'Eva Nanyonga', 'Muhammad Mujahed', 'Al Mukhtar']
for (let p in passengers) {
	console.log(passengers[p])
}

// Iterating over an array with the |for of| loop by changing the episode's has been watched property to false
class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let episodes = [
  new Episode('Dark Beginnings', 45, true),
  new Episode('The Mystery Continues', 45, false),
  new Episode('An Unexpected Climax', 60, false)
];

// Add logic here
// ======================
for ( let episode of episodes) {
	episode.hasBeenWatched = false;
}

    
// ======================


// While loop
let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // one passenger boards
    passengersStillToBoard--; // so there is one fewer still to board
    seatsLeft--; // and one fewer seat
}

console.log(passengersBoarded); // prints 8, as there are 8 passengers for 10 seats