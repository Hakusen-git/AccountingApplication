import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from  '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { addAccount, PostAccount } from "../../api/Api"
import { useTranslation } from "react-i18next"

interface id{
    id: string | null
    toggle: () => void
}

const AddBar = (props: id) => {

    const {t}= useTranslation();

    const [error, setError] = useState(false)

    const toggleError = () => {
        setError(!error)
    }
    
    const [selectedDate, setSelctedDate] = useState<Date | null> (
        new Date (),
    )

    const handleDateChange = (date : Date | null) => {
        setSelctedDate(date)
    }

    const [label, setLabel] = useState<string | null>('')

    const handleLabelChange = (input : string | null) => {
        setLabel(input)
    }

    const [amount, setAmount] = useState<string>('')

    const handleAmountChange = (input : string) => {
        setAmount(input)
    }

    const [type, setType] = useState('')

    const handleTypeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setType(e.target.value as string)
    }
    


    const handleSubmit = async () => {
        if(type==='' || !amount || !selectedDate || label===''){
            toggleError()
            return;
        }
        const body : PostAccount = {
            accountType:type,
            accountAmount:parseInt(amount),
            accountDate: selectedDate?.toDateString(),
            accountLabel: label,
            customerID : props.id
        }
        await addAccount(body)
        props.toggle()
        
    }
    
    return(
        <div style={{paddingTop: 20, border: '3px solid #ff8b3d', marginTop: '20px'}}>
            <h3 style={{margin: 'auto', textAlign: 'center'}}>{t("AddingEntry")}</h3>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="row" alignItems="center" justify="space-around">
                    <Grid item>
                        <FormControl style={{minWidth: 120}}>
                            <InputLabel>{t("Type")}</InputLabel>
                            <Select 
                                native
                                value={type}
                                onChange={handleTypeChange}
                                label={t("Type")}
                                error={error}
                            >
                                <option value={""} aria-label="None" />
                                <option value={"Asset"}>Asset</option>
                                <option value={"Liability"}>Liability</option>
                                <option value={"Equity"}>Equity</option>
                                <option value={"Revenue"}>Revenue</option>
                                <option value={"Expense"}>Expense</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <TextField 
                            label={t("Label")}
                            value={label}
                            onChange={e => handleLabelChange(e.target.value)}
                            error={error}
                            helperText={!error ? "" : "Please don't leave it empty :)"}
                        />
                    </Grid>

                    <Grid item>
                        <TextField 
                            value={amount}
                            label={t("Amount")}
                            onChange={e => handleAmountChange(e.target.value)}
                            error={error}
                            helperText={!error ? "" : "Please put in digits :)"}
                        />
                    </Grid>

                    <Grid item>
                        <KeyboardDatePicker
                            margin="normal"
                            label={t("Date")}
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
                            {t("Add")}
                        </Button>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    )
}


export default AddBar