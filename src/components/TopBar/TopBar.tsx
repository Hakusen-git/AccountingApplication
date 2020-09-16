import { Button, Modal } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Chart from "../Chart/Chart";
import './TopBar.css'

interface chartProps{
    assetAmount: number,
    equityAmount: number,
    liabilityAmount: number,
    expenseAmount: number,
    revenueAmount: number,
    toggleLoading: () => void,
    customerId : string | null
}

export default function TopBar(props: chartProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [t] = useTranslation();
    const handleOpen = () => {
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    return(
        <div className="topBar">
           
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    {t("Chart")}
                </Button>
                <Modal
                    open={modalOpen}
                    onClose={handleClose}
                    style={{display:'flex', alignItems:'center', justifyContent:'center'}}
                >
                    <Chart customerId={props.customerId} assetAmount={props.assetAmount} equityAmount={props.equityAmount} expenseAmount={props.expenseAmount} liabilityAmount={props.liabilityAmount} revenueAmount={props.revenueAmount} toggleLoading={() => props.toggleLoading()}/>          
                </Modal>
            </div>
    )
}