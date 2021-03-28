import React from "react"
import "./App.css"
import ".components/images"

class RandDrink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomImg: "./components/images",
            allDrinkImgs: []
        }
    }
    handleClick = () => {
        let randomNumber = Math.floor(
            Math.random() * this.state.allDrinkImgs.length
        )
        this.setState({ randomImg: this.state.allDrinkImgs[randomNumber].src })
    }
    
    render() {
        return (
            <>
            <button onClick={() => this.handleClick}>generate!</button>
            </>
        );
    }
}

export default class App extends React.Component {
    render() {
        return <RandDrink></RandDrink>
    }
} 