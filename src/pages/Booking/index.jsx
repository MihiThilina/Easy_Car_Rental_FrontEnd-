import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Component } from 'react';


import './style.css';

const top100Films = [
    { label: 'Yes'},
    { label: 'No'}];
 
    // function data(){
    //     const [value, setValue] = React.useState(null);
    //     const [value2, setValue2] = React.useState(null);
    // }

  
  


class Booking extends Component{

    
    constructor(props){
        super(props)
        this.state={
            FormData:{
                booking_ID:'',
                pickup_date:'',
                drop_date:'',
                driver_status:'',
                cars:'',
                loss_damage:'',
                total_Days:'',
                customer:{
                    nicNumber:'',
                    password:'',
                    name:'',
                    address:'',
                    contact:'',
                    email:'',
                    license_number:''
                }
            }
        }
    }
    
   
  render(){
    return(
        
        <main>

                   
                {/* ----Menu Bar------ */}
                <section>
                    <Box  sx={{ flexGrow: 1 }}>
                    <AppBar style={{backgroundColor:"rgb(65, 74, 78)"}} position="fixed">
                            <nav class='topbar'>
                                <ul class="main-nav-link">
                                    <li><a href="#Home" class="underline"><span></span></a></li>
                                    <li><a href="#Profile" class="underline"><span>Profile</span></a></li>
                                    <li><a href="#Booking" class="underline"><span>Booking</span></a></li>
                                    <button>Log Out</button>
                                </ul>
                            </nav>
                    </AppBar>
                    </Box>
                </section> 


        {/* --------------------------------------------------------------------------------------------------------------------------- */}


        <section class="bookingSection">

        <div class="sectionOne">   

        <h1><span class="txtOrderId">Booking Id - B0001</span></h1> 
            
        <div className='date'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        label="Pickup Date"
      
        onChange={(newValue) => {
      
        }}
        renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>        
        </div>

        <div class="time">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
            label="Pickup Time"
            
            onChange={(newValue) => {
         
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>        
        </div>

        <div className='date'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        label="Drop-Off Date"
       
        onChange={(newValue) => {
      
        }}
        renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>        
        </div>

        <div class="time">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
            label="Drop-Off Time"
            
            onChange={(newValue) => {
           
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>        
        </div>

        <div className='driverComboBox'>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 260 }}
        renderInput={(params) => <TextField {...params} label="Need a driver or not?" />}
        />
        </div>

        <div className='TextField'>
        <TextField id="outlined-basic" label="Total Days" variant="outlined" />
        </div>


        <button className='searchButton'>Search</button>
        <button className='bookingbtn'>Booking</button>

        </div>

        <div class="sectionTwo">


        <h1><span class="txtPaymentId">Payment Id - P0001</span></h1> 

        <div class="firstSlider">

        <button className='btnAddtoCart'>Add To Cart</button>

        <div className='line'></div>


        <div className='lossDamage'>
            <Button variant="contained" component="label" style={{backgroundColor:"#D5FB91",color:"black",height:"40px",width:"199px",position:"relative",left:"30px",top:"80px"}}>Upload<input hidden accept="image/*" multiple type="file" /> 
            <IconButton  component="label" style={{color:"black"}}><input hidden accept="image/*"/><PhotoCamera /></IconButton>
            </Button>
            <p className='upload_Sip_note'>Bank confirmations must be submitted for waiver of damages to be paid separately for each car.</p>
            <div className='losDamageTextField'>
            <TextField size="small"   id="outlined-basic" label="Loss Damage" variant="outlined" />
            </div>
        </div>


        </div>
        
        <div class="secondSlider">
                <TableContainer component={Paper} style={{width:"94%",left:"30px",top:"20px",position:"relative"}}>
                    <Table  aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Booking ID</TableCell>
                            <TableCell align="right">Pick UpDate</TableCell>
                            <TableCell align="right">Drop Date</TableCell>
                            <TableCell align="right">Lose Damege</TableCell>
                            <TableCell align="right">Vehicle Number</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        
                        </TableBody>
                    </Table>
            </TableContainer> 
        </div>
        </div>

        </section>


        </main>

        )
  }
    
}

export default (Booking);