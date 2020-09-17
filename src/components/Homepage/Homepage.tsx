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
            <Button component={Link} to="/apps"  variant="contained" color="secondary" size="large">
                {t("Start")}
            </Button>
            </div>
        </div>
    )
}