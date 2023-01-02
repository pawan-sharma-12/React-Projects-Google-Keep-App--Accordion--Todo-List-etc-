import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Todo } from './components/Todo';
import { IncDec } from './components/IncDec';
import { TodoMui } from './components/TodoMui';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Accordion } from './components/accordion/Accordion';


import {Cards} from './components/cards/Cards';
import { Keep } from './components/keep/Keep';
function App() {
  const obj = {
    fontSize : "20px",
    color : "red",
    textAlign :"center"
  }
  return (
    
   <>
    <Routes>
      <Route exact path = '/home' element = {<Home/>} />
      <Route exact path = '/todo' element = {<Todo/>} />
      <Route path = '*' element = {<NotFound/>} />
      <Route exact path = '/incdec' element = {<IncDec/>} />
      <Route exact path='/todomui' element = {<TodoMui/>} />
      <Route exact path = '/accordion' element = {<Accordion/>} />
      <Route exact path = '/cards' element = {<Cards/>}/>
      <Route exact path = '/keep' element = {<Keep/>}/>
    </Routes>
    {/* <button className='btn btn-success' > Demo button for bootstrap</button>
    <button type="button" class="btn btn-secondary">Secondary</button> */}
   </>
  );
}

export default App;
