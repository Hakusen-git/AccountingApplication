import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { getAccounts } from '../../api/Api'
import Account from '../Account/Account'


interface IAccountStates{
    accountType: string,
    accountLabel: string,
    accountAmount: number,
    accountDate : string,
    accountID : string
}

interface IAccounts{
    id: string | null
    refresh: Boolean
    toggleDelete: () => void
    handleAsset: (input:number) => void
    handleLiability: (input:number) => void
    handleEquity: (input:number) => void
    handleRevenue: (input:number) => void
    handleExpense: (input:number) => void
}

export default function Accounts(props: IAccounts) {
    const [Accounts, setAccounts] = useState<IAccountStates[]>([{accountType: '', accountAmount: 0, accountDate: '', accountLabel: '', accountID: ''}])
    
    useEffect(() => {
        const makeArrayRequest = async () => {
            let temp = await getAccounts(props.id)
            setAccounts(temp)
        }
        makeArrayRequest();
    }, [props.id, props.refresh])

    
    var x: JSX.Element[] = []

    if(Accounts){
        let assetAmount = 0
        let liabilityAmount = 0
        let equityAmount = 0
        let revenueAmount = 0
        let expenseAmount = 0

        Accounts.forEach((el: IAccountStates, i: number) => {
            if(!el){
                return;
            }

            switch(el.accountType){
                case "Asset":
                    assetAmount += el.accountAmount
                    break;
                case "Liability":
                    liabilityAmount += el.accountAmount
                    break;
                case "Equity":
                    equityAmount += el.accountAmount
                    break;
                case "Revenue":
                    revenueAmount += el.accountAmount
                    break;
                case "Expense":
                    expenseAmount += el.accountAmount
                    break;
            }

            x.push(
                <Account accountID={el.accountID} accountAmount={el.accountAmount} accountDate={el.accountDate} accountLabel={el.accountLabel} accountType={el.accountType} toggleDelete={() => props.toggleDelete()} />
                
            )
        })

        props.handleAsset(assetAmount)
        props.handleEquity(equityAmount)
        props.handleExpense(expenseAmount)
        props.handleRevenue(revenueAmount)
        props.handleLiability(liabilityAmount)

    }

    return(
        <Paper>
            <TableContainer >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Label</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    {x}
                </Table>
            </TableContainer>
        </Paper>
        
    )




}