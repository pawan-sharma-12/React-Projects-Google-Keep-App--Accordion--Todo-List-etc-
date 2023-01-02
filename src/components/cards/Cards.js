import React from 'react'
import {Card} from './Card'
import './cards.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export const Cards = () => {
  return (
    <>
      <h1 class='text-center my-4 text-danger'>
        welcome to House Of Cards
    </h1>
    <div class="container wrapper">
  <div class="row">
    <div class="col-sm">
     <Card/>
    </div>
    <div class="col-sm">
     <Card/>
    </div>
    <div class="col-sm">
     <Card/>
    </div>
    
  </div>
  <div class = "row">
  <div class="col-sm">
     <Card/>
    </div>
    <div class="col-sm">
     <Card/>
    </div>
    <div class="col-sm">
     <Card/>
    </div>
  </div>

</div>
     
    </>
    
    
  )
}
