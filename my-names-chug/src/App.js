import React from "react"
import "./App.css"

class RandDrink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomImg: "./image/rand",
            allDrinkImgs: []
        }
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleClick = () => {
        let randomNumber = Math.floor(
            Math.random() * this.state.allDrinkImgs.length
        )
        this.setState({ randomImg: this.state.allDrinkImgs[randomNumber] })
    }
    
    render() {
        return (
            
        );
    }
}

export default class App extends React.Component {
    render() {
        return <RandDrink></RandDrink>
    }
} 