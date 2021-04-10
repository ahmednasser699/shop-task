import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions,  Grid } from '@material-ui/core'
import Modal from './modal'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});


const Item = ({ item }) => {
    const classes = useStyles();
   

    return (
        
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {item.description}
          </Typography>
        </CardContent>
                </CardActionArea>
               <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                <CardActions>
                   <Modal title={item.title} price={item.price}  description={item.description} category={item.category} />
                    </CardActions>
                    <div style={{fontSize:'20px'}}>Price: <span style={{fontWeight:'bold', color:'red'}}>{ item.price}</span> LE</div>
                    </div>
            </Card>
        </Grid>
       
    )
}

export default Item
