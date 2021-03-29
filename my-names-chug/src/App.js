import React, { useState } from "react"
import "./App.css"

function Drink() {

    const [url, setUrl] = useState('')

    function fetch_data() {
        fetch('
        https://i.ibb.co/RBFfRSc/bacardi-30.jpg,
        https://i.ibb.co/3BDMnWK/aguardiente-32.jpg,
        https://i.ibb.co/M7t62jt/bacardilimon-31.jpg
        https://i.ibb.co/hVNcY8M/barefoot-40.jpg
        https://i.ibb.co/mz7fB5r/beringer-39.jpg
        https://i.ibb.co/L6DqxVg/bonviv-36.jpg
        https://i.ibb.co/qmPKrd3/budlightseltzer-37.jpg
        https://i.ibb.co/jrdxHJG/captainmorgan-27.jpg
        https://i.ibb.co/v4CyS0s/cirocamaretto-21.jpg
        https://i.ibb.co/XYSkwv9/cirocapple-17.jpg
        https://i.ibb.co/qnWBC2Z/ciroccoconut-18.jpg
        https://i.ibb.co/JQMV6Tq/cirocmango-22.jpg
        https://i.ibb.co/D9SHgMQ/cirocpeach-20.jpg
        https://i.ibb.co/J7M4b9H/cirocredberry-19.jpg
        https://i.ibb.co/mz0QyCt/crownroyal-46.jpg
        https://i.ibb.co/F4WqC29/deepeddy-2.jpg
        https://i.ibb.co/PYQ8TdG/deepeddycran-5.jpg
        https://i.ibb.co/4TnFLKz/deepeddylemon-3.jpg
        https://i.ibb.co/jfWKHT9/deepeddyorange-6.jpg
        https://i.ibb.co/cb9LwRx/deepeddypeach-4.jpg
        https://i.ibb.co/HhGvvXj/fireball-33.jpg
        https://i.ibb.co/gRpvsqq/jackdaniels-29.jpg
        https://i.ibb.co/0C5X8dx/jagermeister-42.jpg
        https://i.ibb.co/2jXsGtm/josecuervo-34.jpg
        https://i.ibb.co/qr3rhB0/ketelone-28.jpg
        https://i.ibb.co/n0bdprX/malibu-11.jpg
        https://i.ibb.co/cFfyPms/naturallightcherry-35.jpg
        https://i.ibb.co/3yLRk71/naturallight-16.jpg
        https://i.ibb.co/W0g9BGB/newamsterdam-25.jpg
        https://i.ibb.co/tzXSDT9/pinkwhitney-26.jpg
        https://i.ibb.co/9WMPSPD/redwhiteberry-8.jpg
        https://i.ibb.co/rpfJsC7/skyyapple-24.jpg
        https://i.ibb.co/dtbQnNv/skyycherry-23.jpg
        https://i.ibb.co/8BbppW0/smirnoff-9.jpg
        https://i.ibb.co/JH28FTW/sourberrylemon-7.jpg
        https://i.ibb.co/p3Gj2Nk/sourwatermelon-10.jpg
        https://i.ibb.co/5nRbkCT/sutterhome-38.jpg
        https://i.ibb.co/23vxmdL/svedkablueras-45.jpg
        https://i.ibb.co/Mhg1fVv/svedkamango-44.jpg
        https://i.ibb.co/BZwW0dx/svedkastrawberry-43.jpg
        https://i.ibb.co/fFLSd5D/titos-1.jpg
        https://i.ibb.co/Sy8Rk1y/trulyberry-13.jpg
        https://i.ibb.co/Hp7gMCv/trulylemonade-14.jpg
        https://i.ibb.co/Mp0jz4r/trulytropical-12.jpg
        https://i.ibb.co/88zdYnb/whiteclaw-15.jpg
        https://i.ibb.co/MPQhPZ6/winkingowl-41.jpg
            ').then(res => {
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
            <img src={url} alt={'drink'}></img>
            <button onClick={fetch_data}>generate</button>
        </div>
    )

}

export default Drink