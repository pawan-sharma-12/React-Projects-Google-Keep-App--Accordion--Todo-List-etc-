import React from 'react';
import { ImCross} from "react-icons/im";
import {RxCrossCircled} from 'react-icons/rx';

export const SingleList = (props) => {
   
  return (
    <>
            <div className='list_containter'>
               <li><RxCrossCircled
                onClick={() => {
                    props.onSelect(props.id)
                }}
                className='icon_cross' /> {props.text}</li>
            </div>
     
    </>
   
  )
}

