import React from "react";
import { Link } from "react-router-dom";

function Chips() {
    return (
        <>
            <p>You Chose Chips!!</p>
            <img src="https://t3.ftcdn.net/jpg/06/25/72/06/360_F_625720683_lLr1AsGlmZEbgj6Zq4Q1Z9zrILG9pmE2.jpg" alt="Bowl of chips"></img>
            <Link to="/">Go Back</Link>
        </>
    )
}

export default Chips;