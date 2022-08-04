import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import React, { Component } from 'react';

import CustomerServices from "../../../service/customerService";

import "./managecusStyle.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



class ManageCustomer extends Component {

  constructor(props){
    super(props)
    this.state={ 
      formData:{
       nicNumber:'',
       password:'',
       name:'',
       address:'',
       contact:'',
       email:'',
       license_number:''
      },
      btnLabel: 'save',
      btnColor: 'primary',

      data:[]
     }
  }

  exampleForMap = () =>{
    this.state.data.map((value,index) =>{
      console.log(value.index)
    });
  }

  
  loadData = async () =>{
    // console.log("load method Calling")
    let res =await CustomerServices.GetCustomer();
    console.log("Customer data " + res.data.data);
  
    if(res.status === 200){
       this.setState({
      data :res.data.data
      });
    }
    console.log(this.state.data);

    this.exampleForMap();
  }

  componentDidMount() { 
      this.loadData();
   }


  render(){
  return (
   
    <main>

      <section>

        <div className='CustomerfristDiv'>
              <div className='CustomertextFildSection'>

              </div>

              </div>
        <div className='secondDiv'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nic Number</StyledTableCell>
            <StyledTableCell align="center">Password</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Emali</StyledTableCell>
            <StyledTableCell align="center">license Number</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>

          </TableRow> 
        </TableHead>
        <TableBody>
          {
            this.state.data.map((row) => (
         <TableRow>
            <TableCell align='center'>{row.nicNumber}</TableCell>
            <TableCell align='center'>{row.password}</TableCell>
            <TableCell align='center'>{row.name}</TableCell>
            <TableCell align='center'>{row.address}</TableCell>
            <TableCell align='center'>{row.contact}</TableCell>
            <TableCell align='center'>{row.email}</TableCell>
            <TableCell align='center'>{row.license_number}</TableCell>
            <TableCell align='center'>
                  <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteCustomer(row.rental_ratesID)
                                        }}
                                    ><DeleteIcon color="error" /></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit"><IconButton
                                        onClick={() => {
                                            console.log("edit icon clicked!")
                                            this.updateCustomer(row);
                                        }}
                                    ><EditIcon color='primary'/></IconButton>
                                    </Tooltip>

                                    <Tooltip title="Show">
                              <IconButton><RemoveRedEyeIcon color="green" /></IconButton>
                            </Tooltip>

                  </TableCell>

          </TableRow>
           
            ))
          }
         
        </TableBody>
      </Table>
    </TableContainer>
        </div>

      </section>

    </main>
   
  )
 }
}

export default (ManageCustomer);