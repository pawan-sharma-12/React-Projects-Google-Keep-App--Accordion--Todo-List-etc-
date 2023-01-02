import React, { useState } from 'react'
import { CreateNote } from './CreateNote.js'
import { Footer } from './Footer.js'
import {Note} from './Note'
import { Header } from './Header.js'
import './Header.css'
export const Keep = () => {
  const[notearr,changenotearr] = useState([]);
  
  const AddNote = (note) =>{
   
    //  alert('you have clicked on button');
    
    
    changenotearr(
      (prev)=>{
        return [...prev,note];
      }
    )
   
    
    
  }
  const onDelete = (id) =>{
      changenotearr((prev)=>{
        return prev.filter((currdata,idx)=>{
          return idx !== id;
        });
      })
  }
  return (
   <>
    <div style={{display: "flex",flexDirection:"column" 
    , height : "100vh"
  
    
    }}>
    <Header/>
     
   
     <CreateNote passNote = {AddNote} />
     <div className='note_div'>

    
        { notearr.map((currval,ind) =>{
          return <Note 
            key = {ind}
            id = {ind}
            title = {currval.title}
            content = {currval.content}
            removeNote = {onDelete}

          />
        })}
     </div>
     <Footer/>
    </div>
   </>
  )
}
