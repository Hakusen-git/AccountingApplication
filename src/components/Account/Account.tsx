import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import { deleteAccount } from '../../api/Api'

interface IState{
    accountType: string | null,
    accountLabel: string | null,
    accountAmount: number | null,
    accountDate : string | null,
    accountID : string | null
    toggleDelete: () => void
}

export default function Account(props: IState) {
    const [temp, setTemp] = useState(false)

    const handleTemp = () => {
        setTemp(!temp)
    }

    const handleDelete = () => {
        if(temp){
            deleteAccount(props.accountID)
        }
        props.toggleDelete()
        handleTemp()
    }

    return(
        <div style={{paddingTop:'50px'}}>
            <Grid container spacing={9} direction="row" alignItems="center" justify="space-around">
                <Grid item><h3>{props.accountType}</h3></Grid>
                <Grid item><h3>{props.accountLabel}</h3></Grid>
                <Grid item><h3>${props.accountAmount}</h3></Grid>
                <Grid item><h3>{props.accountDate}</h3></Grid>
                <Grid item>
                    <Button style={{flex:'1'}} onClick={handleDelete} variant="contained" color="primary" size="large">
                    delete
                    </Button>
                    {temp ? <h3 style={{color:'red'}}>Sure?</h3> : <h1></h1>}
                </Grid>

            </Grid>
        </div>
    )
}