import React from "react";
import { Link } from "react-router-dom";

function Nuts() {
    return (
        <>
            <p>You Chose Nuts!!</p>
            <img src="https://www.pngitem.com/pimgs/m/128-1286948_nut-bowl-png-transparent-png.png" alt="Bowl of nuts"></img>
            <Link to="/">Go Back</Link>
        </>
    )
}

export default Nuts;