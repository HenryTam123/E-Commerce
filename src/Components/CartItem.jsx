import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow: '1px 1px 3px 0.5px grey'
    },  
    content:{
        display:'flex',
        justifyContent:'space-between',
        flex:'1',
    },
    button:{
        backgroundColor:"#424242",
        color:"white"
    },
    h6:{
        justifySelf:"flex-end"
    }
  });

const CartItem = ({item, handleUpdateCart, handleRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia component="img"height="140"image={item.media.source} alt={item.name}/>
                <CardContent className={classes.content}>
                    <Typography variant="h6" >{item.product_name}</Typography>
                    <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>handleUpdateCart(item.id,item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button size="small" color="primary" onClick={()=>handleUpdateCart(item.id,item.quantity + 1)}>+</Button>
                    <Button className={classes.button}size="small" type="button" color="dark" variant='contained' onClick={()=>handleRemoveFromCart(item.id)}>Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartItem
