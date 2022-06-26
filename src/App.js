import React,{useEffect,useState} from 'react';
import './App.scss';
import axios from 'axios';
import CardComponent from './components/CardComponent';
import FirstImage from "./Image/1.png";
import Secondimage from "./Image/2.jpg"
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import GameShow from "./components/GameShow"
const Array=["FirstImage","Secondimage"];
function App() {
  const [ImageName, setImageName] = useState("FirstImage");
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<GameShow/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
