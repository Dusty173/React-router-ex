import React from "react";
import { Link } from "react-router-dom";
function Soda(){
    return (
        <>
            <p>You Chose Soda!!</p>
            <img src="https://images.vexels.com/media/users/3/240163/isolated/preview/838e53f8dec31e96b99260852d46a4cd-soda-bottle-color-stroke.png" alt="Soda bottle"></img>
            <Link to="/">Go Back</Link>
        </>
    )
}


export default Soda;