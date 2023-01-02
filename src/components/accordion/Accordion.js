import { QuestionAnswer } from '@material-ui/icons'
import { valueToPercent } from '@mui/base'
import { elementAcceptingRef } from '@mui/utils'
import React, { useState } from 'react'
import {questions} from './Api'
import {MyAccordion} from './MyAccordion'
import './Accordion.css';
export const Accordion = () => {
    const[data,setData] = useState(questions);
  return (
   <>
   <div className='outer_div'>

   
   <section className='center_div_accord'>
    {
        
        data.map((currElem) =>{
            const {id} = currElem;
                return <MyAccordion key={id } {...currElem}  />
        })
    }
    </section>
    </div>
   </>
  )
}
