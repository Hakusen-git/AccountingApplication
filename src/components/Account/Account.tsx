import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

interface IState{
    accountType: string | null,
    accountLabel: string | null,
    accountAmount: number | null,
    accountDate : string | null,
}

export default function Account(props: IState) {
    

    
    return(
        <div style={{paddingTop:'50px'}}>
            <Grid container direction="row" alignItems="center" justify="space-around">
                <Grid item><h2>{props.accountType}</h2></Grid>
                <Grid item><h2>{props.accountType}</h2></Grid>
                <Grid item><h2>{props.accountType}</h2></Grid>
                <Grid item><h2>{props.accountType}</h2></Grid>
                <Button variant="contained" color="primary" size="large">
                    delete
                </Button>
            </Grid>
        </div>
    )
}