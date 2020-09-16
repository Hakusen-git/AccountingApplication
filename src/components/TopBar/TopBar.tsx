import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css'


export default function TopBar() {
    return(
        <div className="topBar">
                <Button component={Link} to="/" variant="contained" color="primary">
                    Home
                </Button>
                <Button component={Link} to="/apps" variant="contained" color="primary">
                    App Page
                </Button>
            </div>
    )
}