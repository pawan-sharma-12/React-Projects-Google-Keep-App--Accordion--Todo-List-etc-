import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import { Note } from './Note';
export const CreateNote = (props) => {
  const[expand ,setexpand] = useState(false);
  const showFull = () =>{
    if(expand == false)
    setexpand(true);
  }
  const[note,changenote] = useState({
    title :"",
    content :"",
  });
  const addEvent = (e) =>{
    e.preventDefault();
    props.passNote(note);
    changenote(() =>{
     return {
      title :"",
      content : ""
     }
    })
    // console.log(note);
  }
  const hide = () =>{
    setexpand(false);
  }
  const InputEvent = (e) =>{
   
    const{name,value} = e.target;
    // console.log(note); 
    //  console.log(e.target.name);
      changenote((prev) =>{
          return {
            ...prev,
            [name] :value
          }
      });
       console.log(note)
        
  }
  return (
    <>
     <div className='main_note'  onDoubleClick={hide} style={{
    

     }}>    
        <form  style={{
            position : "relative",
            width :"35%",
            margin : "20px auto 40px auto",
            background : "white",
            boxShadow : "0px 1px 7px rgb(128,128,128)"
            ,borderRadius :"7px"
        }}>
            {expand ? <input onChange={InputEvent} type='text' placeholder = 'Title' value={note.title}
            name = "title"
            style= {{
                fontWeight : 'bold',
                fontSize : "20px",
                width :"100%",
                border : "none"
                ,name :"title"
                
                ,outline :"none"
                ,padding :"4px 10px"
                ,marginBottom :"10px"
                
               
            }}
            
            ></input>  : null}
            <textarea onClick={showFull} onChange={InputEvent} rows='' value={note.content} column = '' placeholder = 'write a note....'
            name = "content"
             style={{
                width :"100%",
                border : "none"
                ,name :"content"
                
                ,outline :"none"
                ,padding :"4px 10px"
                ,marginBottom :"10px"
                
                
             }}
            ></textarea>
            {
              expand ?
            <Button style={{
              position :"absolute",
              bottom :"-18px",
              right :"10px",
               height :"50px",
               borderRadius :"4rem",
                justifyContent :"center",
                alignItems : "center",
                background :"#F9EBEA"
                ,boxShadow :"0px 1px 3px rgb(165,165,165)"
            }} onClick = {addEvent}> <AddIcon/> </Button> : null}
        </form>
     </div>
    
    </>
  )
}
