import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth:'100%',
      height:'auto',
      boxShadow: '1px 1px 3px 0.5px grey'
    },
    media: {
      paddingTop: '90%',
    },
    cardActions:{
        display:'flex',
        justifyContent:"flex-end",
        height:"20px",
        margin:"10px"
    },
    content:{
        display:'flex',
        justifyContent:"space-between",
        height:"0px",
        flex:1,
        borderTop:"1px solid lightgray"
    }
  });

const Product = ({product, onAddToCart}) => {

    const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                    <CardMedia
                    className={classes.media}
                    image={product.media.source}
                    />
                    <CardContent className={classes.content}>
                        
                    <Typography gutterBottom variant="h6" component="h2">
                       {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                       ${product.price.formatted}
                    </Typography>
                    </CardContent>
                    <CardContent>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" component="p">
                    </Typography>
                    </CardContent>
                <CardActions className={classes.cardActions} onClick={()=>onAddToCart(product.id, 1)}>
                    <IconButton>
                        <AddShoppingCartIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
