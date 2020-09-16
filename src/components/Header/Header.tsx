import { Button } from '@material-ui/core'
import React from 'react'

interface IHeaderProps{
    handleEng: () => void
    handleJpn: () => void
}

export default function Header(props: IHeaderProps){
    return(
        <div>
            <Button onClick={props.handleEng}>
                English
            </Button>
            <Button onClick={props.handleJpn}>
                日本語
            </Button>
        </div>
    )
}