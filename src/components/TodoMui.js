import React, { useState } from 'react';
import '../css/TodoMui.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';




export const TodoMui = () => {
     const[value ,changevalue] = useState("");
     const[items,changeitems] = useState([]);
     const Changer = (event) =>{
          changevalue(event.target.value);
     }
     const AddItems = () =>{
      changeitems((oldItems) =>{ return  [...oldItems,value];   } )
      changevalue("");
     }
     const HitEnter = (e) =>{
         if(e.key == 'Enter'){
          AddItems();
         }
     }
  return (
    <>
        <div className='main_div'>

            <div className='center_div'>

            <br/>
            <h1 className='heading'> Todo List</h1>
            <br/>
            <input  onKeyUp = {HitEnter}  className='input_txt' onChange={Changer}
               value = {value}
                   type= 'text' placeholder = 'Click to add item' />
            <Button onClick={AddItems}
           
            > <AddIcon/></Button>
            <br/>
            <button type="button" class="btn btn-secondary">Secondary</button>
            
            <ol>
               {items.map(
                 (val) =>{
                  return <li> <CancelIcon className = 'cancel'/> {val}</li>
                 }
               )}
            </ol>
            </div>
            

        </div>
    </>
  )
}
