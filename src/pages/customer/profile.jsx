

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Component } from "react";
import CustomerServices from "../../service/customerService";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./proflieStyle.css"
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';





class  CustomerProflie extends Component {
    
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
        
         alert:'',
         message:'',
         severity:'success',
               data:[],
               btnLabel: 'save',
       }
   }

   deleteCustomer = async (nicNumber) => {
    let params = {
        nicNumber: nicNumber
    }
     let res = await CustomerServices.deleteCustomer(params);

    //  if(res.status === 200) {
    //     this.setState({
    //         alert: true,
    //         message: res.data.message,
    //         severity: 'success'
    //     });
    //     this.loadData();
    //  } else {
    //     this.setState({
    //         alert: true,
    //         message: res.data.message,
    //         severity: 'error'
    //     });
    //  }

     };

   updateCustomer = (data) => {
        console.log(data)
        this.setState({ 
        btnLabel:'Update',
        formData:{
                nicNumber: data.nicNumber,
                password:data.password,
                name:data.name, 
                address:data.address,
                contact:data.contact,
                email:data.email,
                license_number:data.license_number
                }
            });
        };


   exampleForMap = () =>{
    this.state.data.map((value,index) =>{
      console.log(value.index)
    });
  }


   submitCustomer = async () => {
    let formData = this.state.formData;
    let res = await CustomerServices.putCusomer(formData);
    console.log(res);

  };


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
         <>

         <section>
            <Box  sx={{ flexGrow: 1 }}>
               <AppBar style={{backgroundColor:"rgb(65, 74, 78)"}} position="fixed">
                   <nav class='proflie_topbar'>
                   <ul class="proflie_main-nav-link">
                   <li><a href="#Profile" class="underline"><span>Profile</span></a></li>
                   <li><a href="#Booking" class="underline"><span>Booking</span></a></li>
                   <button>Log Out</button>
                   </ul>
                   </nav>
                </AppBar>
            </Box>
         </section> 
  
         <main>
           <section className='coverImg'>
           </section>
           
           <section className='profileSection'>
              <section className='profileSideSection'>
              <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer} > 
              
                 
                 <div className='textFiled-First-Section'>
                          
                 <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="NIC Number" size="small" sx={{ width: '40ch'}} style={{}}
                    value={this.state.formData.nicNumber}
                    onChange={(e) => {
                        let formData = this.state.formData
                        formData.nicNumber = e.target.value
                        this.setState({ formData })
                    }}
                    validators={['required']}
                  />
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Email address" size="small" sx={{ width: '40ch'}} style={{position:"relative",left:'10px'}}
                      value={this.state.formData.email}
                      onChange={(e) => {
                          let formData = this.state.formData
                          formData.email = e.target.value
                          this.setState({ formData })
                      }}
                      validators={['required']}
                  />
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="New Password" size="small" sx={{ width: '40ch'}} style={{position:"relative",left:'20px'}}
                   value={this.state.formData.password}
                   onChange={(e) => {
                       let formData = this.state.formData
                       formData.password = e.target.value
                       this.setState({ formData })
                   }}
                   validators={['required']}
                  
                  />
                   </Box>
                    
                 </div>

                    <div className='textFiled-Second-Section'>

                    <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Full Name" size="small" sx={{ width: '40ch'}} style={{}}
                   value={this.state.formData.name}
                   onChange={(e) => {
                       let formData = this.state.formData
                       formData.name = e.target.value
                       this.setState({ formData })
                   }}
                   validators={['required']}
                  />
                   </Box>



                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Address" size="small" sx={{ width: '40ch'}} style={{position:"relative",left:'10px'}}
                     value={this.state.formData.address}
                     onChange={(e) => {
                         let formData = this.state.formData
                         formData.address = e.target.value
                         this.setState({ formData })
                     }}
                     validators={['required']}       
                  />
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Contact" size="small" sx={{ width: '40ch'}} style={{position:"relative",left:'20px'}}
                   value={this.state.formData.contact}
                   onChange={(e) => {
                       let formData = this.state.formData
                       formData.contact = e.target.value
                       this.setState({ formData })
                   }}
                   validators={['required']}
                  />
                   </Box>


                    </div>
                  
                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Driving License Number" size="small" sx={{ width: '40ch'}} style={{position:"relative",left:'30px'}}
                      value={this.state.formData.license_number}
                      onChange={(e) => {
                          let formData = this.state.formData
                          formData.license_number = e.target.value
                          this.setState({ formData })
                      }}
                      validators={['required']}
                  />
                 
                   </Box>

                   <button label={this.state.btnLabel} type="submit" className='saveandupdateBTN'>Save</button>

                 
              </ValidatorForm>

              <TableContainer component={Paper} style={{position:"relative",top:"20px" , width:"65vw",left:"38px"}}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                    <TableHead style={{backgroundColor:'black',color:'white'}}>
                    <TableRow>
                        <TableCell  style={{color:'white'}}>Nic Number</TableCell>
                        <TableCell style={{color:'white'}} align="center">Password</TableCell>
                        <TableCell style={{color:'white'}} align="center">Name</TableCell>
                        <TableCell style={{color:'white'}} align="center">Address</TableCell>
                        <TableCell style={{color:'white'}} align="center">Contact</TableCell>
                        <TableCell style={{color:'white'}} align="center">Emali</TableCell>
                        <TableCell style={{color:'white'}} align="center">license Number</TableCell>
                        <TableCell style={{color:'white'}} align="center">Action</TableCell>
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
                                  
                                                            
                                 <TableCell  align="right">
                                 <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteCustomer(row.nicNumber)
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
                                     </TableCell>
                                 </TableRow>
                                
                               ))
                        }
                    </TableBody>
                </Table>
                </TableContainer>



              </section>
           </section>
  
         </main>
            
  
         
         </>
    );
   } 
}

export default CustomerProflie;
