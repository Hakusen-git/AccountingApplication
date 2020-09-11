import React, {useState} from "react"
import UserInterface from "../common/UserInterface"
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from  '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'


const AddBar = () => {
    
    const [selectedDate, setSelctedDate] = useState<Date | null> (
        new Date (),
    )

    const handleDateChange = (date : Date | null) => {
        setSelctedDate(date)
    }

    const [type, setType] = useState('')

    const handleTypeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setType(e.target.value as string)
    }

    const handleSubmit = () => {
        
    }
    
    return(
        <div style={{paddingTop: 20, border: '3px solid #ff8b3d', marginTop: '20px'}}>
            <h3 style={{margin: 'auto', textAlign: 'center'}}>Add a new entry</h3>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="row" alignItems="center" justify="space-around">
                    <Grid item>
                        <FormControl style={{minWidth: 120}}>
                            <InputLabel>Account</InputLabel>
                            <Select 
                                native
                                value={type}
                                onChange={handleTypeChange}
                                label="type"
                            >
                                <option aria-label="None" />
                                <option value={"Asset"}>Assert</option>
                                <option value={"liability"}>Liability</option>
                                <option value={"equity"}>Equity</option>
                                <option value={"revenue"}>Revenue</option>
                                <option value={"expense"}>Expense</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <TextField 
                            label="Label"
                        />
                    </Grid>

                    <Grid item>
                        <KeyboardDatePicker
                            margin="normal"
                            label="Date"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label' : 'change date',
                            }} 
                        />
                    </Grid>

                    <Grid item>
                        <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    )
}


export default AddBar