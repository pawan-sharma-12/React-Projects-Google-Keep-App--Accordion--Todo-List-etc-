import { ChangeCircle } from '@mui/icons-material';
import React, { useState } from 'react'

import './Accordion.css'
export const MyAccordion = ({question,ans}) => {
    {console.log(ans);}
    const[flag,chnageflag] = useState(false);
    const [sign,changesign] = useState("➕");
    const AnsToggle = () =>{
      if(flag === true){
        
        chnageflag(!flag);
        
      }else{
        chnageflag(!flag);
      
      }
     
    }
  return (
  <> 
        <div className='question'>
            <p className='plus' onClick={ AnsToggle}>{flag === false ? "➕" : "➖"}</p>
            <h6 className='q_heading'>{question}</h6>
        </div>
        {
          flag && <p className='p_ans'>{ans}</p>
        }
  </>
  
  )
}
