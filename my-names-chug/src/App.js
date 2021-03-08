import React from "react"
import "./App.css"

class RandDrink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomImg: "./image/rand"
        }
    }
}

export default class App extends React.Component {
    render() {
        return <RandDrink></RandDrink>
    }
} 