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

import axios from 'axios';

import BookingService from "../../service/Booking"

import './style.css';

const top100Films = [
    { label: 'Yes' },
    { label: 'No' }];







class Booking extends Component {

    constructor(props) {

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var today = new Date(),
            time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        super(props)
        this.state = {
            newBookingID: null,
            currentDate: date,
            currentTime: time,
            FormData: {
                booking_ID: '',
                pickup_date: '',
                pickup_time: '',
                drop_date: '',
                drop_time: '',
                driver_status: '',
                cars: '1',
                loss_damage: '',
                total_Days: '',
                customer: {
                    nicNumber: '890424252V',
                    password: '123456789',
                    name: 'Mihithilina Banadara',
                    address: 'Colombo',
                    contact: '07789458211',
                    email: 'thilina67@gmail.com',
                    license_number: '85496711'
                },
                bookingDetails: [
                    {
                        booking_ID: "",
                        registration_Number: "2342GB",
                        date: date,
                        time: time
                    }
                ],
            },
            btnLabelSave: 'save',
            alert: '',
            message: '',
            severity: 'succes',

        }
    }


    //=========================================================================GenerateBookingId===========================================






    GenerateBookingId = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/BackEnd_war_exploded/booking/bookingID')
                .then((res) => {
                    console.log(res.data)
                    this.state.newBookingID = res.data.data;
                    console.log(this.state.newBookingID)
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    componentDidMount() {
        this.GenerateBookingId();
    }

    //=====================================================Save Booking+=====================================

    SubmitBooking = async () => {
        let formData = this.state.FormData
        if (top100Films === "Yes") {
            this.state.FormData.driverSchedules = [{
                booking_ID: "",
                licence_ID: "54878887",
                status: "",
                date: null,
                time: null
            }
            ]
            this.GenerateBookingId();
            let res = await BookingService.postBooking(formData);
        } else {
            this.GenerateBookingId();
            let res = await BookingService.postBooking(formData);
        }
        // if (this.state.btnLabelSave == 'save') {
        //     let res = await BookingService.postBooking(formData);
        //     console.log(res)
        //     if (res.status === 200) {
        //         this.setState({
        //             alert: true,
        //             // message: res.formData.message,
        //             severity: 'success'
        //         })
        //     } else {
        //         this.setState({
        //             alert: true,
        //             // message: res.formData.message,
        //             severity: 'error'
        //         });
        //     }
        // }
    }


    render() {
        return (

            <main>


                {/* ----Menu Bar------ */}
                <section>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar style={{ backgroundColor: "rgb(65, 74, 78)" }} position="fixed">
                            <nav class='topbar'>
                                <ul class="main-nav-link">
                                    <li><a href="#Home" class="underline"><span></span></a></li>
                                    <li><a href="#Profile" class="underline"><span>Profile</span></a></li>
                                    <li><a href="#Booking" class="underline"><span>Booking</span></a></li>
                                    <li>{this.state.currentDate}</li>
                                    <li>{this.state.currentTime}</li>

                                </ul>
                            </nav>
                        </AppBar>
                    </Box>
                </section>


                {/* --------------------------------------------------------------------------------------------------------------------------- */}


                <section class="bookingSection">

                    <div class="sectionOne">

                        <h1><span class="txtOrderId"
                        // value={this.state.FormData.booking_ID}
                        // onChange={(e) => {
                        //     let FormData = this.state.FormData
                        //     FormData.booking_ID = e.target.value
                        //     console.log(FormData.booking_ID)
                        //     this.setState({ FormData })
                        // }}
                        >Booking Id - {this.state.newBookingID}</span></h1>

                        <div className='date'>
                            <TextField
                                id="date"
                                label="Pickup Date"
                                type="date"
                                defaultValue="LocalizationProvider"
                                value={this.state.FormData.pickup_date}
                                onChange={(e) => {
                                    let FormData = this.state.FormData
                                    FormData.pickup_date = e.target.value
                                    console.log(FormData.pickup_date)
                                    this.setState({ FormData })
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                        <div class="time">
                            <TextField
                                id="time"
                                label="Pickup Time"
                                type="time"
                                defaultValue="LocalizationProvider"

                                value={this.state.FormData.pickup_time}
                                onChange={(e) => {
                                    let FormData = this.state.FormData
                                    FormData.pickup_time = e.target.value
                                    console.log(FormData.pickup_time)
                                    this.setState({ FormData })
                                }}

                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </div>

                        <div className='date'>
                            <TextField
                                id="date"
                                label="Dropoff Date"
                                type="date"
                                defaultValue="LocalizationProvider"

                                value={this.state.FormData.drop_date}
                                onChange={(e) => {
                                    let FormData = this.state.FormData
                                    FormData.drop_date = e.target.value
                                    console.log(FormData.drop_date)
                                    this.setState({ FormData })
                                }}


                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                        <div class="time">
                            <TextField
                                id="time"
                                label="Dropoff Time"
                                type="time"
                                defaultValue="LocalizationProvider"

                                value={this.state.FormData.drop_time}
                                onChange={(e) => {
                                    let FormData = this.state.FormData
                                    FormData.drop_time = e.target.value
                                    console.log(FormData.drop_time)
                                    this.setState({ FormData })
                                }}

                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </div>

                        <div className='driverComboBox'>
                            <Autocomplete

                                id="combo-box-demo"
                                options={top100Films}

                                sx={{ width: 260 }}
                                renderInput={(params) => <TextField
                                    {...params} label="Need a driver or not?" />}
                            />
                        </div>

                        <div className='TextField'>
                            <TextField
                                id="outlined-basic"
                                label="Total Days"
                                variant="outlined"


                                value={this.state.FormData.total_Days}
                                onChange={(e) => {
                                    let FormData = this.state.FormData
                                    FormData.total_Days = e.target.value
                                    console.log(FormData.total_Days)
                                    this.setState({ FormData })
                                }}

                            />
                        </div>


                        <button className='searchButton'>Search</button>
                        <button type="submit" label={this.state.btnLabelSave} onClick={this.SubmitBooking} className='bookingbtn'>Booking</button>

                    </div>

                    <div class="sectionTwo">


                        <h1><span class="txtPaymentId">Payment Id - P0001</span></h1>

                        <div class="firstSlider">

                            <button className='btnAddtoCart'>Add To Cart</button>

                            <div className='line'></div>


                            <div className='lossDamage'>
                                <Button variant="contained" component="label" style={{ backgroundColor: "#D5FB91", color: "black", height: "40px", width: "199px", position: "relative", left: "30px", top: "80px" }}>Upload<input hidden accept="image/*" multiple type="file" />
                                    <IconButton component="label" style={{ color: "black" }}><input hidden accept="image/*" /><PhotoCamera /></IconButton>
                                </Button>
                                <p className='upload_Sip_note'>Bank confirmations must be submitted for waiver of damages to be paid separately for each car.</p>
                                <div className='losDamageTextField'>
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        label="Loss Damage"
                                        variant="outlined"

                                        value={this.state.FormData.loss_damage}
                                        onChange={(e) => {
                                            let FormData = this.state.FormData
                                            FormData.loss_damage = e.target.value
                                            console.log(FormData.loss_damage)
                                            this.setState({ FormData })
                                        }}
                                    />
                                </div>
                            </div>


                        </div>

                        <div class="secondSlider">
                            <TableContainer component={Paper} style={{ width: "94%", left: "30px", top: "20px", position: "relative" }}>
                                <Table aria-label="simple table">
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