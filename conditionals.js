class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    
    // Add conditions here
    // =================================
    if (minutesWatched === duration) {
      this.hasBeenWatched = true;
    } else {
      this.hasBeenWatched = false;
    }
    // =================================
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

// updating the function

class Episode {
  constructor(title, duration, minutesWatched) {
    this.title = title;
    this.duration = duration;
    // Add logic here
    // ======================
    if (minutesWatched === 0) {
      this.watchedText = 'Not yet watched';
    } else if (minutesWatched  > 0 && minutesWatched  === duration) {
      this.watchedText = 'Watched';
    } else {
      this.watchedText = 'Keep Watching'
    }
    
    
    // ======================
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

console.log(episodes)

// Switch statements
let firstUser = {
    name: 'Will Alexander',
    age: 33,
    accountLevel: 'normal'
};

let secondUser = {
    name: 'Sarah Kate',
    age: 21,
    accountLevel: 'premium'
};

let thirdUser = {
    name: 'Audrey Simon',
    age: 27,
    accountLevel: 'mega-premium'
};

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}