import React from 'react'
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
export const Header = () => {
  return (
     <>
         <div className='header'>
            <div className='inner_header'>
                <div className='logo_container'>
                        <h1>Sidd<span>Keep</span></h1>

                </div>
                <ul className='navigation'>
                <a><li>Home</li></a>
                    <a><li>About</li></a>
                    <a><li>Contact</li></a>
                    <a><li>Other Sites</li></a>
                </ul>
            </div>
        </div> 
      
  
  
     </>

  )
}
