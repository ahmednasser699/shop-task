import React, { useState, } from 'react'
import {TextField} from '@material-ui/core'

const Login = ({rank}) => {
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
   

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (username !== '' && address !== '') {
            localStorage.setItem('username', username);
            localStorage.setItem('address', address);
            localStorage.setItem('rank',rank)
            window.location.reload();
        }
       
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h2 className='title'>Shop Application</h2>
                <form onSubmit={handleSubmit}>
                    <input className="input" type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='enter username' />
                    <input className="input" type='text' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='enter address' />
                    <div align="center">
                        <TextField className="rank" id="filled-basic" fullWidth variant="filled" value={rank} style={{ backgroundColor: '#dcd7d7', width:'90%', marginBottom:'15px'}}/>
                        <button className='button' type='submit'>
                            <span> Log In..</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
