import { Grid } from '@material-ui/core'
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
}

export default function Accounts(props: IAccounts) {
    const [Accounts, setAccounts] = useState<IAccountStates[]>([{accountType: '', accountAmount: 0, accountDate: '', accountLabel: '', accountID: ''}])

    useEffect(() => {
        const makeArrayRequest = async () => {
            let temp = await getAccounts("4")
            setAccounts(temp)
        }
        makeArrayRequest();
        setInterval(makeArrayRequest, 10000)
    }, [props.id])


    var x: JSX.Element[] = []

    if(Accounts){
        Accounts.forEach((el: IAccountStates, i: number) => {
            if(!el){
                return;
            }
            x.push(
                <Grid key={'account_' + i} item>
                    <Account accountID={el.accountID} accountAmount={el.accountAmount} accountDate={el.accountDate} accountLabel={el.accountLabel} accountType={el.accountType} />
                </Grid>
            )
        })
    }

    return(
        <div>
            <Grid container direction="column" alignItems="center" justify="space-around">
                {x}
            </Grid>
        </div>
    )




}