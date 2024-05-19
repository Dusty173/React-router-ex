import React from "react";
import { Link } from "react-router-dom";
import "./Snacks.css"

function Snacks(){
    return (
        <nav>
            <Link to="/Soda">Soda</Link>
            <Link to="/Chips">Chips</Link>
            <Link to="/Nuts">Nuts</Link>
        </nav>
    )
}

export default Snacks;