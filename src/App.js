import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Component/Home/Home';
import Error from './Component/Error/Error';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';






function App() {
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h5>Hello,, This is Jacks</h5>
          
    

       
   

        <BrowserRouter>
          <Routes>
            <Route path='/home' element= {<Home></Home>}>    </Route>    
            <Route path='*' element= {<Error></Error>}> </Route>
            <Route path='/contact' element= {<Contact></Contact>}> </Route>
            <Route path='/about/:ClickedId' element= {<About></About>}></Route>
          
          </Routes>
        </BrowserRouter> 
      </header>
    </div>
  );
}
export default App;
