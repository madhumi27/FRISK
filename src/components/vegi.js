
import React from 'react'
import Navbar from './Navbar';
import './navbar.css';
import  Button  from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
 import FormControlLabel from '@mui/material/FormControlLabel';
export default function Fruits() {
  
  return (
    <div>
    <Navbar/>
    
    <div className='land'>
   
    <div className='storagebox'>
    
<table>
<tr>

  <th><h2>Ingredients</h2></th>
  <span></span><span></span>
  <th><h2>Indate</h2></th>
  <span></span>
  <th><h2>Expiry Date</h2></th>
  <span></span><span></span>
  <div className='sel' style={{paddingLeft:"10px"}}>
  <th><h2>Select</h2></th></div>
  <span></span>
 
</tr>
<tr>
  <td>Cabbage</td>
  <span></span>
  <td>22/11/2022</td>
  <span></span>
  <td>14 days</td>
  <span></span>
  <div className='sel1' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>
<tr>
  <td>Drumstick</td>
  <span></span>
  <td>20/11/2022</td>
  <span></span>
  <td>2 days</td>
  <span></span>
  <div className='sel2' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>
<tr>
  <td>Brocolli</td>
  <span></span>
  <td>20/11/2022</td>
  <span></span>
  <td>5 days</td>
  <span></span>
  <div className='sel3' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>
<tr>
  <td>Carrot</td>
  <span></span>
  <td>19/11/2022</td>
  <span></span>
  <td>3 days</td>
  <span></span>
  <div className='sel4' style={{paddingLeft:"25px"}}>
  <td><FormControlLabel control={<Checkbox defaultChecked />} label="" /></td></div>
</tr>

</table>
<Link to='/findrecipe'>
    <div className='recipe'>
    <Button varient="contained">Find Recipe</Button>
    </div>
    </Link></div>
    </div></div>
  )
}
