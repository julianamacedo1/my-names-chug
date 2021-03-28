import React, { useState } from "react"
import "./App.css"

function Drink() {

    const [url, setUrl] = useState('')

    function fetch_data() {
        fetch('./images').then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Request Failed');

            }, networkError => console.log(networkError.message)
        ).then
    }

}