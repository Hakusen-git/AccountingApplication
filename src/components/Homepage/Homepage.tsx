import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import {useTranslation} from 'react-i18next'
import { useSpring, animated } from 'react-spring'
import { config } from 'process'



export default function Homepage() {
    
    const {t}= useTranslation();

    const propsTitle = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: {duration: 1000}
    })

    const propsLogo = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: {duration: 1000},
        delay: 1500,
    })

    return(
        <div className = "container">
            <div className="main">
            <animated.img style={{...propsLogo as any, width: '250px', paddingTop: '5vh'}} src={require('../../_Logo.png')} />
            <animated.h1 style={propsTitle as any} className="title">{t("Title")}</animated.h1>
            
            <Button component={Link} to="/apps"  variant="contained" color="secondary" size="large">
                {t("Start")}
            </Button>
            
            </div>
        </div>
    )
}