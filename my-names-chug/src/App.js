import React from "react"
import "./App.css"

class RandDrink extends React.Component {
    
    var randomInt = Math.floor(Math.random() * this.rImages.length)
    var rImage = this.rImages[randomInt]

    handleClick = () => {
        
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