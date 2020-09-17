import React from 'react'
import Button from '@material-ui/core/Button'
import { TableBody, TableCell, TableRow } from '@material-ui/core'
import { deleteAccount } from '../../api/Api'
import { useTranslation } from 'react-i18next';

interface IState{
    accountType: string | null,
    accountLabel: string | null,
    accountAmount: number | null,
    accountDate : string | null,
    accountID : string | null
    toggleDelete: () => void
}

export default function Account(props: IState) {

    
    const {t}= useTranslation();
    
    const handleDelete = async () => {
        await deleteAccount(props.accountID)
        props.toggleDelete()
    }

    return(
        <TableBody>
            <TableRow hover >
                <TableCell>
                    {props.accountDate}
                </TableCell>
                <TableCell>{props.accountLabel}</TableCell>
                <TableCell>{props.accountType}</TableCell>
                <TableCell>{props.accountAmount}</TableCell>
                <TableCell>
                    <Button onClick={handleDelete} variant="contained" color="secondary">
                        {t("Delete")}
                    </Button>    
                </TableCell>
            </TableRow>
        </TableBody>
    )
}