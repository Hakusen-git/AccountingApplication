import { Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'; 
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';


export interface chartProps{
    assetAmount: number,
    equityAmount: number,
    liabilityAmount: number,
    expenseAmount: number,
    revenueAmount: number,
    toggleLoading: () => void,
    customerId : string | null
}

export default function Chart(props: chartProps) {
    const {t}= useTranslation();


    useEffect(() => {
        props.toggleLoading()
    }, [])

    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels: ['Asset', 'Equity', 'Liability', 'Expense', 'Revenue'],
            datasets: [{
                data:[props.assetAmount, props.equityAmount, props.liabilityAmount, props.expenseAmount, props.revenueAmount],
                backgroundColor: ["rgba(255,0,0,0.4)","rgba(0,0,255,0.6)","rgba(255,255,0,0.6)","rgba(120,250,120,0.5)", "rgba(196,133,230,0.5)" ],
            }],
            
        })
    }

    useEffect(() => {
        chart()
    }, [])


    return(
        <Paper
            style={{
                width:"100%",
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
            }}
        >
            <h1 style={{textAlign:'center'}}>{t("Doughnut")}</h1>
            <Doughnut
                data={chartData}
                height={100}
                options={{
                    animationRotate:true,
                    responsive: true,
                    maintainAspectRatio: true
                }}
            />
        </Paper>
    )
}