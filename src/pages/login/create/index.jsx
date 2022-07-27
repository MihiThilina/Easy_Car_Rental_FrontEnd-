
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Component } from "react";
import React from 'react';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import  CustomerService from "../../../service/customerService"

import './createStyle.css';

class CreateAccountPage extends Component{

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
          alert:'',
          message:'',
          severity:'succes'
        }
      }

      clearFields = () =>{
        this.setState({
          formData:{
          nicNumber:'',
          password:'',
          name:'', 
          address:'',
          contact:'',
          email:'',
          license_number:''
          }
        })
      }

      submitCustomer = async () => {
        let formData = this.state.formData;
        console.log("form data : " + JSON.stringify(formData))
        let res = await CustomerService.postCustomer(formData);
        
        console.log(res);

        if(res.status === 200){
             this.clearFields();
        }else{

        }
      };

      render(){
        return( 
        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer} > 

               <main>
                  
                    <div class="main_header">
                     <h1 style={{textAlign: "center"}}>Sign up</h1>
                     <h2>Create Account</h2>
                    </div>

                <section class="signup_Page">

                 <div class="signup_Page_first_slider">
                 <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="NIC Number" size="small" sx={{ width: '40ch'}} style={{position:"relative",left:"70px",top:"150px"}}
                   o value={this.state.formData.nicNumber}
                    nChange={(e) => {
                        let formData = this.state.formData
                        formData.nicNumber = e.target.value
                        this.setState({ formData })
                    }}
                    validators={['required']}
                  />
                         
                 
                  <div class="upload-NIC">
                   <Stack direction="row" spacing={2} style={{position:"absolute"}}>
                    <Button variant="contained" component="label" style={{backgroundColor:"#D5FB91",color:"black",height:"40px"}}>Upload<input hidden accept="image/*" multiple type="file" /> 
                    <IconButton  component="label" style={{color:"black"}}><input hidden accept="image/*"/><PhotoCamera /></IconButton>
                    </Button>
                    </Stack>
                    </div>
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Email address" size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"170px"}}
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
                  <TextValidator id="outlined-name" label="New Password" size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"190px"}}
                   value={this.state.formData.password}
                   onChange={(e) => {
                       let formData = this.state.formData
                       formData.password = e.target.value
                       this.setState({ formData })
                   }}
                   validators={['required']}
                  
                  />
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Full Name" size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"210px"}}
                   value={this.state.formData.name}
                   onChange={(e) => {
                       let formData = this.state.formData
                       formData.name = e.target.value
                       this.setState({ formData })
                   }}
                   validators={['required']}
                  />
                   </Box>
                 </div>
               
                <div  class="signup_Page_second-slider">
                <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Address" size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"150px"}}
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
                  <TextValidator id="outlined-name" label="Contact" size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"170px"}}
                   value={this.state.formData.contact}
                   onChange={(e) => {
                       let formData = this.state.formData
                       formData.contact = e.target.value
                       this.setState({ formData })
                   }}
                   validators={['required']}
                  />
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <TextValidator id="outlined-name" label="Driving License Number" size="small" sx={{ width: '40ch'}} style={{position:"relative",left:"70px",top:"190px"}}
                      value={this.state.formData.license_number}
                      onChange={(e) => {
                          let formData = this.state.formData
                          formData.license_number = e.target.value
                          this.setState({ formData })
                      }}
                      validators={['required']}
                  />
                    <div class="upload-License">
                   <Stack direction="row" spacing={2} style={{position:"absolute",right:"0"}}>
                    <Button variant="contained" component="label" style={{backgroundColor:"#D5FB91",color:"black",height:"40px"}}>Upload<input hidden accept="image/*" multiple type="file" />
                    <IconButton color="primary" component="label" style={{color:"black"}}><input hidden accept="image/*"/><PhotoCamera /></IconButton>
                     </Button>           
                    </Stack>
                    </div>
                   </Box>
                </div>

                </section>
                 <div class="signup_Page_vertical-center">
                     <button label={this.state.btnLabel} type="submit" className='signupBTN'>Register</button>
                  </div>
              </main>


        </ValidatorForm>
        )
      }
        

}


export default (CreateAccountPage);