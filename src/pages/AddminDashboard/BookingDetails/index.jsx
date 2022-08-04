import { Component } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BookingService from "../../../service/Booking"
import { TableBody } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

class BookingDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {

                  bookingDetails: [
                {
                    booking_ID: "",
                    registration_Number: "",
                    date: '',
                    time: ''
                }
            ],

           data: []
           
        }
    }


    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value.index)
        });
    }

    loadData = async () => {
        console.log("load method Calling")
        let res = await BookingService.GetBooking();
        console.log("Booking data " + res.data.data);

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data);

        this.exampleForMap();
    }

    componentDidMount() {
        this.loadData();
    }






    render() {
        return (
            <>
                <div className='secondDiv'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Boooking ID</StyledTableCell>
                                    <StyledTableCell align="right">Registration Number</StyledTableCell>
                                    <StyledTableCell align="right">Date</StyledTableCell>
                                    <StyledTableCell align="right">Time</StyledTableCell>
                                    <StyledTableCell align="right">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <StyledTableCell>{row.booking_ID}</StyledTableCell>
                                            <StyledTableCell align="right">{row.registration_Number}
                                       
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                                            <StyledTableCell align="right">{row.time}</StyledTableCell>
                                            <StyledTableCell align="right"></StyledTableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </>
        )
    }


}

export default (BookingDetails);