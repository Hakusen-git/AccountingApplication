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
}

export default function Account(props: IState) {
    console.log(props.accountID)
    const handleDelete = () => {
        deleteAccount(props.accountID)
    }

    return(
        <div style={{textAlign: 'center',display:'flex',paddingTop:'50px'}}>
            <h2 style={{flex:'4'}}>{props.accountType}</h2>
            <h2 style={{flex:'4'}}>{props.accountLabel}</h2>
            <h2 style={{flex:'4'}}>${props.accountAmount}</h2>
            <h2 style={{flex:'4'}}>{props.accountDate}</h2>
            <Button style={{flex:'1'}} onClick={handleDelete} variant="contained" color="primary" size="large">
                delete
            </Button>
        </div>
    )
}