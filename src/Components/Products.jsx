import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core';
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';
import landing from '../assets/landing3.png'

const useStyles = makeStyles((theme)=>({
    root: {
      marginTop:'0px',
      backgroundColor: theme.palette.background.default,
      padding:"60px",
    },
    img:{
        marginTop:"58px",
        width:"100%",
        height:"100vh",
        position:'relative',
        objectFit:"cover"
    },
    black:{
        position:'absolute',
        height:'100vh',
        width:'100%',
        top:0,
        left:0,
        backgroundColor:"black",
        display:'fixed',
        marginTop:"58px",
        opacity:"0.4"
    },
    description:{
        position:'absolute',
        top:'50%',
        left:'50%',
        color:"white",
        zIndex:"2",
        transform:"translate(-50%,-50%)",
        textAlign:"center",
        [theme.breakpoints.down('xs')]:{
            width:"100%"
        },
    }

  }));

const Products = ({products, onAddToCart}) => {

    const classes = useStyles()

    return (
        <main >
            <img src={landing}  className={classes.img}/>
            <div className={classes.description}>
                <Typography variant="h3" style={{'padding-bottom':"40px"}}>Fantastic Shop</Typography>
                <Typography variant="h5" style={{'padding-bottom':"40px"}}>You can find any products you want here.</Typography>
                <Button type="button" variant='outlined' style={{'padding':"8px",'color':"white", "border-color":"white"}}>Lets Begin</Button>
            </div>

            <div className={classes.black}></div>
            <Grid className={classes.root} container justify="center"  spacing={5} >
                
                <div className="" />
                {products.map(product =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
