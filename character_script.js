
// this is a class creator example for a character creation. 


class Media {
    constructor(title, isCheckedOut, ratings) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = ratings;
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      return ratingsSum / this._ratings.length;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
      return this._isCheckedOut;
    }
  
    addRating(newRating) {
      this._ratings.push(newRating);
      return this._ratings.length;
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages, isCheckedOut, ratings) {
      super(title, isCheckedOut, ratings);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime, isCheckedOut, ratings) {
      super(title, isCheckedOut, ratings);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, songs, title, isCheckedOut, ratings) {
      super(title, isCheckedOut, ratings);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544, false, []);
  historyOfEverything.toggleCheckOutStatus(); // Toggle the checkout status
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(20); // Add a rating of 4
  
  // If you want to log the number of ratings after adding a new rating:
  console.log(historyOfEverything.addRating(5)); // This will log the new length of the ratings array
  