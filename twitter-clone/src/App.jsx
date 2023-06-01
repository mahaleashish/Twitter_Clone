import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Signup from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';

import SignUp from './component/SignUp/signup';
import SearchBar from './component/HomePage/RightBar/SearchBar/SearchBar';
import Twitterdata from'./DATA.json';
import HomePage from './component/HomePage/HomePage';


function App() {

  return (
   
      <Router >
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route  path="/home" element={<HomePage/>}/>
          <Route path="/"  element={<SignIn/>}/>
          {/* <SearchBar data={Twitterdata}/> */}
    


        </Routes>
       
      
      </Router>
      
    
     
   
  );
} 

export default App;