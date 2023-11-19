// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [icon, seticon]= useState("moon");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme= ()=>{
    const newTheme = isDarkTheme ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme);
    setIsDarkTheme(!isDarkTheme);
    if (icon === "moon"){;
      seticon("sun");
    }
    else{
      seticon("moon");
    }
  }
  
  return (
    <>
    <BrowserRouter>
    <Navbar title="Textutils" icon={icon} theme={toggleTheme}/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={<Textform heading="Enter the text to analyze" />} />
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
