import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import React, { Component } from 'react'
import DriverService from "../../../service/DriverService"

import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import './manageDriver.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



class ManageDriver extends Component {

  constructor(props){
    super(props)
       this.state={
        fromData:{
          licence_ID:'',
          name:'',
          address:'',
          contact:'',
          salary:''
        },
        btnLabelSave:'save',
        data:[]
       }
    }

    exampleForMap = () =>{
      this.state.data.map((value,index) =>{
        console.log(value.index)
      });
    }



    submitDriver = async () => {
      let formData = this.state.formData;
      console.log("form data : " + JSON.stringify(formData))
      let res = await DriverService.postDriver(formData);
      
      console.log(res);
  
      if(res.status === 200){
          //  this.clearFields();
      }else{}
    };
     
    loadData = async () =>{
      console.log("load method Calling")
      let res =await DriverService.GetDriver();
      console.log("Diver data " + res.data.data);
    
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
      <>
      <main>

       <section>

         <div className='DriverfristDiv'>
         <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriver} > 
               <div className='DrivertextFildSection'>
               
               <div className='Driverfirstflied'>
               <Box component="form" noValidate autoComplete="off">
               <TextValidator id="outlined-name"label="licence ID"
                       value={this.state.fromData.licence_ID}
                       onChange={(e) => {
                           let formData = this.state.fromData
                           formData.licence_ID = e.target.value
                           this.setState({ formData })
                       }}
                       validators={['required']}
               />
               </Box>
             
               <Box component="form" style={{position:'relative',left:'30px'}} noValidate autoComplete="off">
               <TextValidator id="outlined-name"label="Name"
                  value={this.state.fromData.name}
                  onChange={(e) => {
                      let formData = this.state.fromData
                      formData.name = e.target.value
                      this.setState({ formData })
                  }}
                  validators={['required']}
               />
               </Box>

               <Box component="form" noValidate autoComplete="off"  style={{position:'relative',left:'58px'}}>
                 <TextValidator id="outlined-name"label="Address" 
                      value={this.state.fromData.address}
                      onChange={(e) => {
                          let formData = this.state.fromData
                          formData.address = e.target.value
                          this.setState({ formData })
                      }}
                      validators={['required']}
                 />
                 </Box>
                 <Box component="form" style={{position:'relative',left:'83px'}} noValidate autoComplete="off">
                 <TextValidator id="outlined-name"label="Contact"
                        value={this.state.fromData.contact}
                        onChange={(e) => {
                            let formData = this.state.fromData
                            formData.contact = e.target.value
                            this.setState({ formData })
                        }}
                        validators={['required']}
                 />
                 </Box>
               </div> 
               
               <div className='Driverfirstflied'>
                 
                 
                 <Box component="form"  style={{position:'relative'}} noValidate autoComplete="off">
                 <TextValidator id="outlined-name"label="Salary"
                      value={this.state.fromData.salary}
                      onChange={(e) => {
                          let formData = this.state.fromData
                          formData.salary = e.target.value
                          this.setState({ formData })
                      }}
                      validators={['required']}
                 />
                 </Box>
               
                 
                 
                 </div>
               
                 
               </div>

               <div class="_Page_vertical-center">
              <button label={this.state.btnLabelSave} type="submit" className='DriverSaveBTN'>Save</button>
              <button label={this.state.btnLabelUpdate} type="submit" className='DriverUpdatebTN'>Update</button>
                  </div>
               </ValidatorForm>

              

               </div>
         <div className='RatesecondDiv'>
         <TableContainer component={Paper}>
               <Table sx={{ minWidth: 700 }} aria-label="customized table">
                 <TableHead>
                   <TableRow>
                     <StyledTableCell>Licence Id</StyledTableCell>
                     <StyledTableCell align="center">Name</StyledTableCell>
                     <StyledTableCell align="center">Address</StyledTableCell>
                     <StyledTableCell align="center">Contact</StyledTableCell>
                     <StyledTableCell align="center">Salary</StyledTableCell>
                     <StyledTableCell align="center">Action</StyledTableCell>
                   </TableRow> 
                 </TableHead>
                 <TableBody>
                  {
                     this.state.data.map((row) => (
                               <TableRow>
                                 <StyledTableCell align='center'>{row.licence_ID}</StyledTableCell>
                                 <StyledTableCell align='center'>{row.name}</StyledTableCell>
                                 <StyledTableCell align='center'>{row.address}</StyledTableCell>
                                 <StyledTableCell align='center'>{row.contact}</StyledTableCell>
                                 <StyledTableCell align='center'>{row.salary}</StyledTableCell>
                                 <StyledTableCell  align="center">
                          <Tooltip title="Delete"><IconButton
                                 onClick={() => {
                                     this.deleteRentalRate(row.rental_ratesID)
                                 }}
                             ><DeleteIcon color="error" /></IconButton>
                             </Tooltip>
                             <Tooltip title="Edit"><IconButton
                                 onClick={() => {
                                     console.log("edit icon clicked!")
                                     this.updateRentalRate(row);
                                 }}
                             ><EditIcon color='primary'/></IconButton>
                             </Tooltip>
                              </StyledTableCell>
                               </TableRow>
                     ))
                  }

         </TableBody>
       </Table>
       </TableContainer>
         </div>

       </section>
   </main>
</>
    );
  }

}

export default ManageDriver;