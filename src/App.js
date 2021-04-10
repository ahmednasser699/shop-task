import React,{useState, useEffect} from 'react'
import './style.css'
import axios from 'axios'
import Login from './login'
import Item from './item'
import {Grid} from '@material-ui/core'


const App = () => {
    const [data, setData] = useState([]);
    const membership = ['normal', 'platinum', 'gold'];
    const ran = Math.floor(Math.random() * 3);
    const rank = membership[ran];

    const getData =async () => {
         const response =  await axios.get('https://fakestoreapi.com/products?limit=6')
        setData(response.data)
        
       
        
    }
    useEffect(() => {
        getData()
      
       
    }, [])
    if(!localStorage.getItem('username')) return <Login rank={rank} />
    return (
        <div style={{marginTop:'10px'}}>
            
            <Grid container spacing={3}>
                {data.map(item => (
                    <Item item={item} key={item.title} />
                ))}
                </Grid>
        </div>
    )
}

export default App
