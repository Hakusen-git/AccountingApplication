import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'


export default function Homepage() {
    

    return(
        <div className = "container">
            <div className="main">
            <h1 className="title">Welcome to The Accounting App</h1>
            <button className="startBtn">
                <Link to="/apps">
                START
                </Link>
            </button>
            </div>
        </div>
    )
}