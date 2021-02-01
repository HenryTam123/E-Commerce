import React from 'react'
import {Typography, Container, Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme)=>({
    root: {
      marginTop:'65px',
      padding:"50px",
    },
    bottom:{
        paddingTop:'50px',
        display:'flex',
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:'flex-end'
    },
    button:{
       margin:"10px"
    },
    h5:{
        marginBottom:"20px"
    }
  }));

const Cart = ({cart, handleUpdateCart, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles()
    const isEmpty = !cart.line_items.length

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={4}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CartItem item={item} handleUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.bottom}>
                <Typography variant='h5'>Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
                <div >
                    <Button className={classes.button}size="small" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Clear Cart</Button>
                    <Button component={Link} to="/checkout"className={classes.button}size="small" type="button" variant="contained" color="primary">Check Out</Button>
                </div>
            </div>
        </>
    )
    return (
        <div >
            <Container className={classes.root}>
                <Typography className={classes.h5} variant="h5">Your Shopping Cart</Typography>
                {isEmpty ? <EmptyCart/>: cart && <FilledCart/>}
            </Container>
        </div>
    )
}

export default Cart
