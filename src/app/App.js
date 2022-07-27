import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddminDashBoard from "../pages/AddminDashboard"
import Booking from "../pages/Booking"
import CustomerProflie from "../pages/customer/profile"
import HomePage from "../pages/Home/"
import LoginPage from "../pages/login"
import CreateAccountPage from "../pages/login/create"

function App() {
  return (
    
      <Routes>
      <Route exact path="/" element={ <HomePage />}/>
      <Route exact path="/LoginPage" element={ <LoginPage />}/>
      <Route exact path="/CreateAccountPage" element={ <CreateAccountPage /> }/>
      <Route exact path="/Booking" element={ <Booking/>  }/>
      </Routes>

        //  {/* <LoginPage />  */}
        //  {/* <HomePage /> */}
        //  {/* <CreateAccountPage /> */}
            // <Booking/> 
        //  <AddminDashBoard /> 
        // <CustomerProflie />
        // <CreateAccountPage />

  );
}

export default App;
