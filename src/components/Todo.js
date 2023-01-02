import React, { useState } from 'react'
import '../css/Todo.css'
import { SingleList } from './SingleList';
export const Todo = () => {
    const[value,changeval] = useState("" );
    const[items,setItems]  = useState([]);

    const setItem = (event) =>{
            changeval(event.target.value);
    }
    const ButtonFunction = () => {
            setItems( (oldItems) => {
                return [...oldItems,value];
            });
            changeval("");

            }
        
     const deleteItem = (id) =>{
        setItems((oldItems) =>{
            return oldItems.filter((arrel,index) =>{
                return index !== id;
            })
        })
                
            }
            const handleKey = (event) =>{
                if(event.key === 'Enter'){
                    ButtonFunction();
                }
                console.log(event.key);
            }
  return (
    <>
        <div className='main_div'>
            <div className='center_div'>
                    
                    <h1 className='heading'>
                        Todo List
                    </h1>
                    <input onChange={setItem} className='item_txt_class' value={value}
                    onKeyUp = {handleKey}
                    type= 'text' name = 'item_txt' placeholder = 'Add Item' />
                   <button onClick={ButtonFunction} className='add_btn'>
                    +
                   </button>
                   <ol>
                        {
                            items.map((itemVal,index) =>{
                                return  <SingleList 
                                text = {itemVal} 
                                id = {index}
                                onSelect = {deleteItem}
                                key = {index}/>
                            })
                        }
                   </ol>
            </div>
        </div>
    </>
  )
}
