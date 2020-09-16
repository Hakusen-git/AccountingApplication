import React, { useEffect, useState } from 'react'; 
import { Doughnut } from 'react-chartjs-2';


export interface chartProps{
    assetAmount: number,
    equityAmount: number,
    liabilityAmount: number,
    expenseAmount: number,
    revenueAmount: number,
    toggleLoading: () => void
}

export default function Chart(props: chartProps) {
    useEffect(() => {
        props.toggleLoading()
        console.log('loaded')
    }, [])

    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels: ['Asset', 'Equity', 'Liability', 'Expense', 'Revenue'],
            datasets: [{
                data:[props.assetAmount, props.equityAmount, props.liabilityAmount, props.expenseAmount, props.revenueAmount],
                backgroundColor: ["rgba(255,0,0,0.4)","rgba(0,0,255,0.6)","rgba(255,255,0,0.6)","rgba(120,250,120,0.5)", "rgba(0,0,0,0.5)" ],
            }],
            
        })
    }

    useEffect(() => {
        chart()
    }, [props.assetAmount])


    return(
        <div className="chart">
            <Doughnut
                data={chartData}
                height={100}
                options={{
                    animationRotate:true,
                    responsive: true,
                    maintainAspectRatio: true
                }}
            />
        </div>
    )
}