import React from 'react'
import Button from '@material-ui/core/Button'

interface IAccountProps{
    type: string,
    label: string,
    date: Date
}

export default function Account(props: IAccountProps) {
    return(
        <div className="container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingTop:'50px'}}>
            <p>type</p>
            <p>label</p>
            <p>date</p>
            <Button>
                delete
            </Button>
        </div>
    )
}