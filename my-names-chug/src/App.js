import React from "react"
import "./App.css"

class RandDrink extends React.Component {
    
    var randomInt = Math.floor(Math.random() * this.rImages.length)
    var rImage = this.rImages[randomInt]

    handleClick = () => {
        this.rImages = [require('random/image1.png'),require('random/image2.png'), ... etc]
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