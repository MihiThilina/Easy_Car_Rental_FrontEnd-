
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



class Booking extends Component {

  constructor(props) {
    super(props)
    this.state = {
      FormData: {
        booking_ID: '',
        pickup_date: '',
        pickup_time: '',
        drop_date: '',
        drop_time: '',
        driver_status: '',
        cars: '',
        loss_damage: '',
        total_Days: '',
        customer: {
          nicNumber: '',
          password: '',
          name: '',
          address: '',
          contact: '',
          email: '',
          license_number: ''
        }
      },
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
                  <StyledTableCell align="right">Cars</StyledTableCell>
                  <StyledTableCell align="right">Driver Status</StyledTableCell>
                  <StyledTableCell align="right">Drop Date</StyledTableCell>
                  <StyledTableCell align="right">Drop Time</StyledTableCell>
                  <StyledTableCell align="right">Pickup Date</StyledTableCell>
                  <StyledTableCell align="right">Pickup Time</StyledTableCell>
                  <StyledTableCell align="right">LossDamage</StyledTableCell>
                  <StyledTableCell align="right">Total Days</StyledTableCell>
                  <StyledTableCell align="right">Cus NIC</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {
                  this.state.data.map((row) => (
                    <TableRow>
                      <StyledTableCell>{row.booking_ID}</StyledTableCell>
                      <StyledTableCell align="right">{row.cars}</StyledTableCell>
                      <StyledTableCell align="right">{row.driver_status}</StyledTableCell>
                      <StyledTableCell align="right">{row.drop_date}</StyledTableCell>
                      <StyledTableCell align="right">{row.drop_time}</StyledTableCell>
                      <StyledTableCell align="right">{row.pickup_date}</StyledTableCell>
                      <StyledTableCell align="right">{row.pickup_time}</StyledTableCell>
                      <StyledTableCell align="right">{row.loss_damage}</StyledTableCell>
                      <StyledTableCell align="right">{row.total_Days}</StyledTableCell>
                      <StyledTableCell align="right">{row.customer.nicNumber}</StyledTableCell>
                      <StyledTableCell align="center"><button></button></StyledTableCell>
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

export default (Booking);