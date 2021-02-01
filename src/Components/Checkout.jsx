import React, {useState, useEffect} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider , Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Confirmation from './Confirmation'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import {commerce} from '../lib/commerce'


const useStyles = makeStyles((theme)=>({
    root: {
      marginTop:'100px',
      display:'flex',
      justifyContent:"center"

    },
    paper:{
        padding:"20px",
        width:"50%",
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        },
        [theme.breakpoints.up(600)]:{
            width:'600px'
        }
    }
  }));

const steps =["Shipping address", "Payment Details"]

const Checkout = ({cart}) => {

    const [token, setToken] = useState(null)


    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)

    const Form =() => activeStep === 0
    ? <AddressForm/> 
    : <PaymentForm/>

    return (
        <>
            <main class={classes.root}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="h4" aligin="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} >
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length? <Confirmation/> : <Form/>}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
