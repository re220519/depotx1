import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./App/homescreen/homescreen";
import {Routes, Route } from 'react-router-dom';
import MyForm from "./header/form";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={ <HomeScreen />} />
          <Route path="/form" element={ <MyForm /> } />
          
          
        </Routes>
    </BrowserRouter>
    <div>
      
    </div>
    </>
  );
}

export default App;