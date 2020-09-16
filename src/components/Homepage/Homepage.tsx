import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'


export default function Homepage() {
    

    return(
        <div className = "container">
            <div className="main">
            <h1 className="title">Welcome to The Accounting App</h1>
            <Button variant="contained" color="secondary" size="large">
                <Link to="/apps">
                START
                </Link>
            </Button>
            </div>
        </div>
    )
}