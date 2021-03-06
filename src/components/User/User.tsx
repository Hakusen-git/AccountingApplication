
import { Grid} from '@material-ui/core'
import React, { useState } from 'react'
import { addCustomer, PostCustomer } from '../../api/Api';
import FacebookLogin from 'react-facebook-login';
import { useTranslation } from 'react-i18next';


interface IUserProps{
    setCustomerID: (a: string | null) => void
    id: string | null
    toggleAccount: () => void
}


const User = (props: IUserProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [t] = useTranslation();

    const [userName, setUserName] = useState<string>('');
    const [img, setImg] = useState<string>('');

    const handleUserName = (input : string) => {
        setUserName(input)
    }

    const handleImg = (input : string) => {
        setImg(input)
    }

    const handleLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const componentClicked = () => console.log('clicked');

    const responseFacebook = (response: any) => {
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
        handleImg(response.picture.data.url)
    }

    let fbContent;

    if(isLoggedIn){
        fbContent = (
            <div style={{
                width: '400px',
                margin: 'auto',
                background: '#FC5185',
                padding: '20px',
                alignContent: 'center',
                textAlign: 'center'
            }}>
                <img style={{borderRadius:'50px'}} src={img} alt={userName}/>
                <h2 style={{color:'#008C76FF'}}>{t("Welcome")}</h2>
                <p style={{color:'#008C76FF'}}>{userName}</p>

                <div 
                    >
                        <a target="_blank" 
                        style={{
                            background:"#3b5998",
                            color: 'white',
                            textDecoration: 'none',
                            padding: '2px 18px 3px 18px',
                            borderRadius:'10px'
                        }}
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmsa-2020-accounting.azurewebsites.net%2F">
                            {t("Share")}
                        </a>
                </div>
            </div>
        )
    } else{
        fbContent = (<FacebookLogin
        appId="740211256526028"
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