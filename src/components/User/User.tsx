
import { Backdrop, Button, Fade, FormControl, Grid, InputLabel, Modal, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { addCustomer, PostCustomer } from '../../api/Api';
import FacebookLogin from 'react-facebook-login';


interface IUserProps{
    setCustomerID: (a: string | null) => void
    id: string | null
    toggleAccount: () => void
}


const User = (props: IUserProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [userName, setUserName] = useState<string>('')

    const handleUserName = (input : string) => {
        setUserName(input)
    }

    const handleLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const componentClicked = () => console.log('clicked');

    const responseFacebook = (response: any) => {
        console.log(response)
        props.setCustomerID(response.id as string)
        const body:PostCustomer = {
            customerID : response.id as string,
            customerLabel: response.email as string
        }
        const addRequest = async () => {
            await addCustomer(body)
        }
        addRequest()
        props.toggleAccount()
        handleLoggedIn()
        handleUserName(response.name)
    }

    let fbContent;

    if(isLoggedIn){
        fbContent = (
            <div>
                <h1>Welcome Back {userName}</h1>

            </div>
        )
    } else{
        fbContent = (<FacebookLogin 
        appId="2802992179976775"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        />)
    }

    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="space-evenly" style={{paddingTop:'20px'}}>
            {fbContent}
            </Grid>
        </div>
    )
    
}

export default User