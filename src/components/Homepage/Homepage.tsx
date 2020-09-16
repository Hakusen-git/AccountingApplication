import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import {useTranslation} from 'react-i18next'


export default function Homepage() {
    
    const {t, i18n}= useTranslation();

    return(
        <div className = "container">
            <div className="main">
            <img style={{width: '250px', paddingTop: '5vh'}} src={require('../../_Logo.png')} />
            <h1 className="title">{t("Title")}</h1>
            <Button variant="contained" color="secondary" size="large">
                <Link to="/apps">
                {t("Start")}
                </Link>
            </Button>
            </div>
        </div>
    )
}