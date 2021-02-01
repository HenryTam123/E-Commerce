import React, { useState } from 'react'
import {InputLabel, Grid,Typography, Select, MenuItem, Button} from'@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'
import {commerce} from '../lib/commerce'
const AddressForm = () => {
    const methods = useForm()
    const [country, setCountry] = useState('')

    const states =['United State', "Singapore", "Taiwan", "Poland", "Austria"]

    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3} >
                        <FormInput required name='firstName' label="First name"/>
                        <FormInput required name='lastName' label="Last name"/>
                        <FormInput required name='address' label="Address"/>
                        <FormInput required name='email' label="Email"/>
                        <FormInput required name='city' label="City"/>
                        <FormInput required name='zip' label="ZIP/ Postal Code"/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select fullWidth value={country}>
                                {states.map(state=>(
                                    <MenuItem >
                                        {state}
                                    </MenuItem>                                    
                                ))}
                               
                                
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
