// Open classroom class on objects

let episode = {
	title: "Pilot Episode",
	duration: 45,
	hasBeenWatched: true
};

// class
class Episode {
	constructor(title, duration, hasBeenWatched) {
		this.title = title;
		this.duration = duration;
		this.hasBeenWatched = hasBeenWatched;
	}
}

let firstEpisode = new Episode('Pilot', 45, true);
let secondEpisode = new Episode('The Plot Thickens', 0, false);
let thirdEpisode = new Episode('The Climax', 45, true);

// console.log(firstEpisode);
// console.log(secondEpisode);
// console.log(thirdEpisode);

// array
// let episodes = [firstEpisode, secondEpisode, thirdEpisode];

let episodes = [];

episodes.push(firstEpisode); // , secondEpisode, 
episodes.push(secondEpisode);
episodes.push(thirdEpisode);
episodes.push(secondEpisode);
episodes.push(firstEpisode);

console.log(episodes);