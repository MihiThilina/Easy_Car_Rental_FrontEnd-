import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddminDashBoard from "../pages/AddminDashboard"
import Booking from "../pages/AddminDashboard/Booking"
import BookingDetails from "../pages/AddminDashboard/BookingDetails"
import Home from  "../pages/AddminDashboard/Home/Home";
import ManageCar from "../pages/AddminDashboard/ManageCar";
import ManageCustomer from  "../pages/AddminDashboard/ManageCustomer";
import ManageDriver from  "../pages/AddminDashboard/ManageDriver";
import ManageRentalRates from  "../pages/AddminDashboard/ManageRentalRates";
import PlaceOrder from "../pages/Booking"
import CustomerProflie from "../pages/customer/profile"
import HomePage from "../pages/Home/"
import LoginPage from "../pages/login"
import CreateAccountPage from "../pages/login/create"

function App() {
  return (
    
      <Routes>
        <Route exact index element={ <HomePage />}/>
        <Route exact path="/LoginPage" element={ <LoginPage />}/>
        <Route exact path="/CreateAccountPage" element={ <CreateAccountPage /> }/>
          <Route exact path="/AddminDashBoard" element={<AddminDashBoard />}>
                <Route  path="manageCar" element={<ManageCar/>}/>
                <Route  path="manageDriver" element={<ManageDriver/>}/>
                <Route  path="ManageBooking" element={<Booking/>}/>
                <Route  path="BookingDetails" element={<BookingDetails/>}/>
                <Route  path="manageCustomer" element={<ManageCustomer/>}/>
                <Route  path="manageRentalRates" element={<ManageRentalRates/>}/>  
          </Route>
      </Routes>

      //<Home />
        //{/* <LoginPage />  */}
        //{/* <HomePage /> */}
        //{/* <CreateAccountPage /> */}
            // <PlaceOrder/> 
        //<AddminDashBoard /> 
        // <CustomerProflie />
        // <CreateAccountPage />

  );
}

export default App;
