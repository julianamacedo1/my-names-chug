import React from "react"
import "./App.css"

class RandDrink extends React.Component {
    
    

    handleClick = () => {
        var randomInt = Math.floor(Math.random() * this.rImages.length)
        var rImages = this.rImages[randomInt]
        this.rImages = [require('./components/images')]
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