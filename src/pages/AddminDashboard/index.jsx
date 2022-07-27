import { Button } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Home from "./Addmin/Home";
import ManageCar from "./Addmin/manageCar";
import ManageCustomer from "./Addmin/manageCustomer";
import ManageDriver from "./Addmin/manageDriver";
import ManageRentalRates from "./Addmin/manageRentalRates";

import './AddminStyle.css'

const drawerWidth = 240;

export default function AddminDashBoard(props){

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose =() =>{
    
  }

  const listItemData = [
    {label: "Home", link: "/", icon:<InboxIcon />},
    {label: "Manage Car", link: "/ManageCar", icon:<InboxIcon />},
    {label: "Manage Customer", link: "/manageCustomer", icon:<InboxIcon />},
    {label: "Manage Driver", link: "/ManageDriver", icon:<InboxIcon />},
    {label: "Manage Booking", link: "/", icon:<InboxIcon />},
    {label: "Booking Details", link: "/", icon:<InboxIcon />},
    {label: "Rental Rate", link: "/ManageRentalRates", icon:<InboxIcon />}
   ]
  

  const drawer = (
    <div  style={{ border:"1px solid red"}} >
      <Toolbar /> 
      <Divider />
      <List>
      {listItemData.map((item, i) => (
            
            <Button size="small"  onClick={() => handleDrawerClose()}>
                 <ListItem
                exact
                component={NavLink}
                to={item.link}
                key={i}
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
            </ListItem>
            </Button>      
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

        return(
            <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
              
              position="fixed"
              sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              <Toolbar style={{ border:"1px solid red"}}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Addmin DashBoard
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
              >
                {drawer}
              </Drawer>
              
            </Box>
            <Box
              
              component="main"
              sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
              <Toolbar />
                  
                   {/* <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/ManageCar" element={<ManageCar/>}/>
                    <Route exact path="/manageDriver" element={<ManageDriver/>}/>
                    <Route exact path="/manageCustomer" element={<ManageCustomer/>}/>
                    <Route exact path="/ManageRentalRates" element={<ManageRentalRates/>}/>                    
                   </Routes> */}
       
            </Box>
          </Box>
          
        );
        

        AddminDashBoard.propTypes = {
            /**
             * Injected by the documentation to work in an iframe.
             * You won't need it on your project.
             */
            window: PropTypes.func,
          };
}