import { Grid } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { getAccounts } from '../../api/Api'
import Account from '../Account/Account'

interface IAccountStates{
    accountType: string,
    accountLabel: string,
    accountAmount: number,
    accountDate : string,
}

interface IAccounts{
    id: string
}

export default function Accounts(props: IAccounts) {
    const [Accounts, setAccounts] = useState<IAccountStates[]>([{accountType: '', accountAmount: 0, accountDate: '', accountLabel: ''}])

    useEffect(() => {
        const makeArrayRequest = async () => {
            let temp = await getAccounts("3")
            setAccounts(temp)
        }
        makeArrayRequest();
        setInterval(makeArrayRequest, 10000)
    }, [])


    var x: JSX.Element[] = []
    Accounts.forEach((el: IAccountStates, i: number) => {
        console.log(el)
        if(!el){
            return;
        }
        x.push(
            <Grid item>
                <Account accountAmount={el.accountAmount} accountDate={el.accountDate} accountLabel={el.accountLabel} accountType={el.accountType} />
            </Grid>
        )
    })

    return(
        <div>
            <Grid container direction="column" alignItems="center" justify="space-around">
                {x}
            </Grid>
        </div>
    )




}