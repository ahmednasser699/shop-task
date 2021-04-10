import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, TextField } from '@material-ui/core'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    Width: '600px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ title, price, category }) {
    const rank = localStorage.getItem('rank');
    const address = localStorage.getItem('address');

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = useState('')
    const [totPrice, setTotPrice] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    const countChange = (e) => {
        if (!isNaN(e.target.value)) {
            setCount(e.target.value)
        }
       
        
    }
    const member = () => {
        if (rank === 'gold') {
            return <h4>Membership: <span style={{color:'#e6d614'}}>Gold</span> 15%off</h4>
        } else if (rank === 'platinum') {
             return <h4>Membership: <span style={{color:'#12b1c1'}}>platinum</span> 10%off</h4>
        } 
    }
    const priceCalc = () => {
        if (rank === 'gold') {
            setTotPrice(Math.round(count * price * .85))
           
        } else if (rank === 'platinum') {
            setTotPrice(Math.round(count * price * .9))
           
        } else {
            setTotPrice(Math.round(count * price))
           
        }
    }
  const body = (
      <div style={ modalStyle} className={classes.paper} >
          <h2 id="simple-modal-title" style={{ width: '600px' }}>
              {title}
          </h2>
          <h3 style={{ color: '#655f5f', marginTop: '10px', marginBottom: '10px' }}>
              {category}
          </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <div>
                 <h4 id="simple-modal-description" style={{marginBottom: '10px'}}>
                      Price: {price} L.E
                </h4>
                <h4>
                  {member()}
                </h4>
            </div>
              <h4>Address: <span style={{ color: '#655f5f'}}>{ address}</span></h4>
              </div>
          <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', marginTop:'15px'}}>
              <TextField id="outlined-basic" label="quantity" variant="outlined"  onChange={(e)=>countChange(e)} value={count} onKeyUp={priceCalc} />
              <h5>Total Price: <span style={{ color: 'red' }}>{ totPrice}</span> LE</h5>
          </div>
          <div style={{textAlign:'center', marginTop:'15px', }}>
           <Button size="small" style={{backgroundColor:'#0083ff', color:'white',padding:'8px 15px'}} onClick={handleClose}>
                  purchase
        </Button>
              </div>
    </div>
  );

  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
                    add to cart
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
