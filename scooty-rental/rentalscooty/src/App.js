import {Home} from "./Scooty/Home"
import {Route, Routes} from "react-router-dom";
import { Display } from './Scooty/Display';
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dis/:id' element={<Display/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
