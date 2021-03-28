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
        ).then(
            jsonRes => {
                setUrl(jsonRes[0].url)
            }
        )
    }

    return (
        <div>
            <img src={'./images'} alt={'drink'}></img>
            <button onClick={fetch_data}>generate</button>
        </div>
    )

}

export default Drink