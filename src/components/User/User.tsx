import { FormControl, Grid, InputLabel, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getCustomers } from '../../api/Api';

interface IUser{
    customerID : string | undefined,
    customerLabel: string | null
}

interface IUserProps{
    setCustomerID: (a: string | null) => void
}


const User = (props: IUserProps) => {
    const [user, setUser] = useState<String>('');
    const [userJson, setUserJson] = useState<IUser[]>([{customerID: '', customerLabel: ''}])

    useEffect(() => {
        const makeRequest = async () => {
            setUserJson(await getCustomers())
        }
        makeRequest()
        setInterval(makeRequest, 100000)
    }, [])

    var Users:JSX.Element[] = []
    
    if(userJson){
        userJson.forEach((el:IUser, i:number) => {
            if(!el){
                return;
            }
            Users.push(
                <option id={'user_'+i}  value={el.customerID}>{el.customerLabel}</option>
            )
        })
    }

    const handleUserChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setUser(e.target.value as string)
        props.setCustomerID(e.target.value as string)
    }

    return(
        <div>
            <Grid container direction="row" alignItems="center" justify="space-around">
                <Grid item>
                <FormControl style={{minWidth: 120}}>
                            <InputLabel>User</InputLabel>
                            <Select 
                                native
                                value={user}
                                onChange={handleUserChange}
                                label="user"
                            >
                                <option aria-label="None" />
                                {Users}

                            </Select>
                        </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default User