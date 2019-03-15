  class Library {
    constructor(name, creator) {
      this.name = name;
      this.creator = creator;
    }
  }
  Library.prototype.playlists = [];

  class Playlist extends Library {
    constructor(name) {
      super(name);
    }
    overallRating(rating) {
      let tracks = [];
      let rating = (tracks) => tracks.reduce((a, b) => a + b) / tracks.length;
      return rating;
    };

    length(seconds) {
      let seconds = '00:00:00'.split(':').reduce((acc, seconds) => {
        (60 * acc) + +seconds
      })
      return seconds;
    }

    totalDuration(timeOfTracks) {
      return timeOfTracks.reduce((a, b) => {
        let min, sec;
        [min, sec] = string.split(':').slice(-2).map(n => parseInt(n, 10));
        return sum + min * 60 + sec;
      }, 0)
    }

    formatTime(trackTime) {
      pad(number => {
        return `${number}`.slice(-2);
      })
      let minutes = trackTime % 3600 / 60 | 0;
      let seconds = trackTime % 60;
      let minSec = `${pad(minutes)}:${pad(seconds)}`;

      return minures > 0 ? `${hours}:${minSec}` : minSec;
    }
  }
  Playlist.prototype.tracks = {};

  class tracks extends Playlist {
    constructor(title, rating, length) {
      this.title = title;
      this.rating = rating;
      this.length = length;
    }
    rating() {
      number = [1, 2, 3, 4, 5]
    };
  }

  const library = {
    tracks: {
      t01: {
        id: "t01",
        name: "Code Monkey",
        artist: "Jonathan Coulton",
        album: "Thing a Week Three"
      },
      t02: {
        id: "t02",
        name: "Model View Controller",
        artist: "James Dempsey",
        album: "WWDC 2003"
      },
      t03: {
        id: "t03",
        name: "Four Thirty-Three",
        artist: "John Cage",
        album: "Woodstock 1952"
      }
    },
    playlists: {
      p01: {
        id: "p01",
        name: "Coding Music",
        tracks: ["t01", "t02"]
      },
      p02: {
        id: "p02",
        name: "Other Playlist",
        tracks: ["t03"]
      }
    }
  }