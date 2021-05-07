import React from 'react';
import { Link } from "react-router-dom";

export function Button () {
    return (
        <Link to='Instagram'>
            <i className='instagram-btn fab fa-instagram'/>
        </Link>
    )
}