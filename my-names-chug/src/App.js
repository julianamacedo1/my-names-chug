import React, { useState } from "react"
import "./App.css"

class RandDrink extends React.Component {
    
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