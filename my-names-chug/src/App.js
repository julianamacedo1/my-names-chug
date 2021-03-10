import React from "react"
import "./App.css"

class RandDrink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            font_size: "22",
            topText: "",
            bottomText: "",
            randomImg: "./image/rand",
            allDrinkImgs: []
        };
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleClick = () => {
        let randomNumber = Math.floor(
            Math.random() * this.state.allDrinkImgs.length
        );
        this.setState({ randomImg: this.state.allDrinkImgs[randomNumber].url })
    };
    increaseFont = () => {};
    componentDidMount() {
    fetch("./image/rand")
      .then(data => data.json())
      .then(response => {
        const { drinks } = response.data;
        this.setState({ allDrinkImgs: drinks });
      });
    }
    render() {
        return (
            <div>
        <div className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <br />
          <input
            type="number"
            name="font_size"
            placeholder="font size"
            onChange={this.handleChange}
            value={this.state.font_size}
          />
          <button onClick={this.handleClick}>Generate!</button>
        </div>
        <div className="meme">
          <h2
            style={{ fontSize: Number(this.state.font_size) }}
            className="top"
          >
            {this.state.topText}
          </h2>
          <img src={this.state.randomImg} alt="" />
          <h2
            style={{ fontSize: Number(this.state.font_size) }}
            className="bottom"
          >
            {this.state.bottomText}
          </h2>
        </div>
      </div>
        );
    }
}

export default class App extends React.Component {
    render() {
        return <RandDrink></RandDrink>
    }
} 