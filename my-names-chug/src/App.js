import React from "react"
import "./App.css"

class RandDrink extends React.Component {
    
    render() {

        this.rImages = [require('./components/images')]

        return (
            
        );
    }
}

export default class App extends React.Component {
    render() {
        return <RandDrink></RandDrink>
    }
} 