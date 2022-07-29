import AddminDashBoard from "../pages/AddminDashboard"
import Booking from "../pages/Booking"
import CustomerProflie from "../pages/customer/profile"
import HomePage from "../pages/Home/"
import LoginPage from "../pages/login"
import CreateAccountPage from "../pages/login/create"
import Home from  "../pages/AddminDashboard/";
import ManageCar from "../pages/AddminDashboard/ManageCar";
import ManageCustomer from  "../pages/AddminDashboard/ManageCustomer";
import ManageDriver from  "../pages/AddminDashboard/ManageDriver";
import ManageRentalRates from  "../pages/AddminDashboard/ManageRentalRates";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route exact index element={ <HomePage />}/>
        <Route exact path="/LoginPage" element={ <LoginPage />}/>
        <Route exact path="/CreateAccountPage" element={ <CreateAccountPage /> }/>
          <Route exact path="/AddminDashBoard" element={<AddminDashBoard />}>
                <Route  path="manageCar" element={<ManageCar/>}/>
                <Route  path="manageDriver" element={<ManageDriver/>}/>
                <Route  path="manageCustomer" element={<ManageCustomer/>}/>
                <Route  path="manageRentalRates" element={<ManageRentalRates/>}/>  
          </Route>
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
