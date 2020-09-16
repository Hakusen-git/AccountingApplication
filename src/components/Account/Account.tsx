import React, { useState } from 'react'
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
    

    const handleDelete = async () => {
        await deleteAccount(props.accountID)
        props.toggleDelete()
    }

    return(
        <div style={{paddingTop:'50px', display:'grid', gridAutoFlow:'column', gridTemplateColumns:'repeat(5, 1fr)'}}>
                <h3>{props.accountType}</h3>
                <h3>{props.accountLabel}</h3>
                <h3>${props.accountAmount}</h3>
                <h3>{props.accountDate}</h3>
                <Button style={{flex:'1'}} onClick={handleDelete} variant="contained" color="secondary" size="small">
                    delete
                </Button>
         
        </div>
    )
}