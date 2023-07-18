import React from 'react'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './fee.css'

import { useNavigate } from 'react-router-dom'
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { useDispatch } from 'react-redux'
// import { setUser } from './action'
//import { useNavigate } from 'react-router-dom'


export default function Fee() {
//const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
const nav = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
    nav("/fee")
    //dispatch(setUser(name));
  
      
    }
  return (
    <div className='back' style={{marginTop:'-150px'}}>
    
      <Box
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      ></Box>

      <div>
    
      </div>
      <form className='fee' action='http://localhost:3000/Payment'>
        <center>
          <h1>Fee Payment</h1><br></br>
          <label>Name Of The Student</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br />
          <br></br>
          <label>Email</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            type="email"
            required
          /><br />
          <br></br>
          <label>Roll Number</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="Roll Number"
            variant="outlined"
            type="int"
            required
          /><br />
          <br></br>
        
          
 {/* <div>       

<label>Standard</label><br/>
<br/>


  <select>

    <option value="fruit">Fruit</option>

    <option value="vegetable">Vegetable</option>

    <option value="meat">Meat</option>

  </select>


</div> */}
<div>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
      <label>Standard</label>
      <br/>
      
        
        <Select
        id="ph"
         placeholder='Standard'
          value={age}
          onChange={handleChange}
          autoWidth
          
        >
         
          <MenuItem value={10}>I-10,000</MenuItem>
          <MenuItem value={21}>II-15,000</MenuItem>
          <MenuItem value={22}>III-20,000</MenuItem>
          <MenuItem value={22}>IV-25,000</MenuItem>
          <MenuItem value={22}>V-30,000</MenuItem>
          <MenuItem value={22}>VI-35,000</MenuItem>
          <MenuItem value={22}>VII-40,000</MenuItem>
          <MenuItem value={22}>VIII-35,000</MenuItem>
          <MenuItem value={22}>IX-30,000</MenuItem>
          <MenuItem value={22}>X-25,000</MenuItem>
          <MenuItem value={22}>XI-20,000</MenuItem>
          <MenuItem value={22}>XII-18,000</MenuItem>
        </Select>
      </FormControl>
    </div>

          <br />
          <br></br>
        
      
         
       </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" type='submit'  onClick={handleLogin} id='btn' >Pay Now</Button> 
        </Box>
        <br></br>

        
      </form>
    </div>
  )
}