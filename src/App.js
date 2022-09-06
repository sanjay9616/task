import React, { useState } from "react";
import "./App.css";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";

function App() {
  // const [logoutUser, setLogoutUser]=useState(false)
  return (
        
        <div className="App">
          <h2>ReactJS Practical</h2>
          <BrowserRouter>
            <Routes>

              <Route path="/login" element={<>
              <Login/>
              </>}/>
              <Route/>

              <Route exact path="/" element={<>
              <Header/> 
              <Home/>
              </>}>
              </Route>

              <Route path="/register" element={<>
              <Register/>
              </>}/>
              <Route/>

              

            </Routes>
            
          </BrowserRouter>
      </div>
  );
}

export default App;
