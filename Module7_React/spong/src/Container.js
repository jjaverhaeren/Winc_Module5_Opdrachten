import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [
        {
          id: 1,
          title: "For Whom The Bell Tolls",
          artist: "Metallica",
          genre: "rock",
          rating: 4,
        },
        {
          id: 2,
          title: "Blessed are the Sick",
          artist: "Morbid Angel",
          genre: "pop",
          rating: 3,
        },
        {
          id: 3,
          title: "Outshined",
          artist: "Soundgarden",
          genre: "country",
          rating: 4,
        },
        {
          id: 4,
          title: "For the love of God",
          artist: "Steve Vai",
          genre: "classical",
          rating: 5,
        },
        {
          id: 5,
          title: "Hangar 18",
          artist: "Megadeth",
          genre: "folk",
          rating: 2,
        },
      ],
      song: "",
      artist: "",
      genre: "",
      rating: 5,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newId = this.state.playlist.length + 1;
    let newSong = event.target.childNodes[0].value;
    let newArtist = event.target.childNodes[1].value;
    let newGenre = event.target.childNodes[2].value;
    let newRating = event.target.childNodes[3].value;
    let newItem = {
      id: newId,
      title: newSong,
      artist: newArtist,
      genre: newGenre,
      rating: newRating,
    };
    this.state.playlist.push(newItem);
    this.setState({ playlist: this.state.playlist, genre: "genre", rating: 5 });
    event.target.childNodes[0].value = "";
  }

  handleSort(event) {
    let target = event.target;
    switch (target.value) {
      case "song":
        this.state.playlist.sort(function (a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ playlist: this.state.playlist });
        break;
      case "artist":
        this.state.playlist.sort(function (a, b) {
          if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1;
          if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ playlist: this.state.playlist });
        break;
      case "genre":
        this.state.playlist.sort(function (a, b) {
          if (a.genre.toLowerCase() < b.genre.toLowerCase()) return -1;
          if (a.genre.toLowerCase() > b.genre.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ playlist: this.state.playlist });
        break;
      case "rating":
        this.state.playlist.sort(function (a, b) {
          return b.rating - a.rating;
        });
        this.setState({ playlist: this.state.playlist });
        break;
      default:
        this.state.playlist.sort(function (a, b) {
          if (a.id.toLowerCase() < b.id.toLowerCase()) return -1;
          if (a.id.toLowerCase() > b.id.toLowerCase()) return 1;
          return 0;
        });
        this.setState({ playlist: this.state.playlist });
    }
  }

  deleteSong(event) {
    event.preventDefault();
    // console.log(event.target.parentElement.childNodes[0].innerHTML);
    const toDelete = event.target.parentElement.childNodes[0].innerHTML;
    this.state.playlist.forEach(item => {
      // console.log(item.id);
      // console.log(toDelete);
      if (toDelete === item.id) {
        let index = this.state.playlist.indexOf(item);
        this.state.playlist.splice(index, 1);
        this.setState({ playlist: this.state.playlist });
      } else {
        console.log('no item deleted')
      }
    });
  }

  render() {
    return (
      <div>
        <Input
          song={this.state.song}
          artist={this.state.artist}
          genre={this.state.genre}
          rating={this.state.rating}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleSort={this.handleSort}
        />
        <List playlist={this.state.playlist} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default Container;
