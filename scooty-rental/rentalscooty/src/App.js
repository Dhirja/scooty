import {Home} from "./Scooty/Home"
import Signup from './Scooty/Signup';
import { Login } from './Scooty/Login';
import {Route, Routes} from "react-router-dom";
import { Display } from './Scooty/Display';
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dis/:id' element={<Display/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
