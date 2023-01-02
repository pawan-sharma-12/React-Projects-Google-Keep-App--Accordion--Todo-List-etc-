import React from 'react'
import './Header.css'
import { DeleteOutline } from '@material-ui/icons'
export const Note = (props) => {
  // console.log(props);
  const remove = () =>{
     props.removeNote(props.id);
  }
  return (
    <div className='note'>
        <h1 >
            {props.title}
        </h1>
        <br/>
        <p>
            {props.content}
        </p>
        <DeleteOutline onClick = {remove} className='delete_outline'/>


    </div>
  )
}
