import React, { useState } from 'react'
import '../css/IncDec.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';
import Clock from 'react-digital-clock';
export const IncDec = () => {
    const[value , changevalue] = useState(0);
    const IncrementFunction = () =>{
        changevalue(value + 1);
    }
    const DecrementFunction = ()  =>{
        if(value === 0  ) alert('zero limit reached');
        else{
            changevalue(value -1);
        }
    }
  return (
    <div className='main_div_incdec'>
        <div className='center_div_incdec'>
            <Clock className = 'clock'/>
            <h1 className='heading_incdec'>
                {value}
            </h1>
            <div className='div_btn'>
           
            
            <Tooltip title="Increment">
                   <Button onClick={IncrementFunction} className='inc_btn' ><AddIcon/></Button>
            </Tooltip>
            <Tooltip title = "Decrement">
            <Button onClick={DecrementFunction} className='dec_btn'><RemoveIcon/></Button>
            </Tooltip>
            </div>
           
        </div>

    </div>
  )
}
