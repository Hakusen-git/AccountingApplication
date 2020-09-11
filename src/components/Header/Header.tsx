import React from 'react'
import './Header.css'

const Header = () => {
    return(
        <div className="header" style={{ display:'flex' }}>
            <h1 style={{color: "rgb(0,0,0.9)", margin: "auto",  textAlign: "center"}}>Accounting Application</h1>
        </div>
    )
}

export default Header