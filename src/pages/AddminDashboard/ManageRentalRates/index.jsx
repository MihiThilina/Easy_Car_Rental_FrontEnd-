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
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import React, { Component } from 'react';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import RentalRatesService from "../../../service/RentalRatesService"

import './rentalRates.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




class ManageRentalRates extends Component {

  constructor(props){
    super(props)
    this.state={
      formData:{
        rental_ratesID:'',
        price_per_Extra:'',
        type:'',
        km_for_a_month:'',
        km_for_a_day:'',
        dailyRate:'',
        monthlyRate:''
      },
          btnLabelSave: 'save',
          btnLabelUpdate:'update',
          alert:'',
          message:'',
          severity:'succes',
          data:[]
    }
  }


  deleteRentalRate  = async (id) => { 
    let params = {
        id: id
    }
     let res = await RentalRatesService.deleteRentalRate(params);

     if(res.status === 200) {
        this.setState({
            alert: true,
            message: res.data.message,
            severity: 'success'
        });
        this.loadData();
     } else {
        this.setState({
            alert: true,
            message: res.data.message,
            severity: 'error'
        });
     }
   }; 

  updateRentalRate = (data) => {
    console.log(data)

    this.setState({ 
       btnLabelUpdate: 'update',
       btnColor: 'secondary',
       formData:{
        rental_ratesID:data.rental_ratesID,
        price_per_Extra:data.price_per_Extra,
        type:data.type,
        km_for_a_month:data.km_for_a_month,
        km_for_a_day:data.km_for_a_day,
        dailyRate:data.dailyRate,
        monthlyRate:data.monthlyRate
      }  
     });
   };




  submitRentalRates = async () => {
    let formData = this.state.formData;
        if(this.state.btnLabelSave === "save") {
            let res = await RentalRatesService.postRentalRatesService(formData);
            console.log(res)    //print the promise
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else if (this.state.btnLabelUpdate === "update") {
            let res = await RentalRatesService.PutRentalRates(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabelUpdate: 'update',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
  };

  exampleForMap = () =>{
    this.state.data.map((value,index) =>{
      console.log(value.index)
    });
  }

  loadData = async () =>{
    // console.log("load method Calling")
    let res =await RentalRatesService.GetRentalRates();
    console.log("RentalRates data " + res.data.data);
  
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

 

  clearFields =() =>{
    this.setState({
      formData:{
        rental_ratesID:'',
        price_per_Extra:'',
        type:'',
        km_for_a_month:'',
        km_for_a_day:'',
        dailyRate:'',
        monthlyRate:''
      },
      btnLabelSave: 'save',
      alert:'',
      message:'',
      severity:'succes'
    })
  }
  
  

  
  

  render(){
  return (
      <>
             <main>

              <section>

                <div className='RatesfristDiv'>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitRentalRates} > 
                      <div className='RatestextFildSection'>
                      
                      <div className='Rentfirstflied'>
                      <Box component="form" noValidate autoComplete="off">
                      <TextValidator id="outlined-name"label="Rate ID"
                              value={this.state.rental_ratesID}
                              onChange={(e) => {
                                  let formData = this.state.formData
                                  formData.rental_ratesID = e.target.value
                                  this.setState({ formData })
                              }}
                          
                      />
                      </Box>
                    
                      <Box component="form" style={{position:'relative',left:'30px'}} noValidate autoComplete="off">
                      <TextValidator id="outlined-name"label="Type"
                         value={this.state.formData.type}
                         onChange={(e) => {
                             let formData = this.state.formData
                             formData.type = e.target.value
                             this.setState({ formData })
                         }}
                         validators={['required']}
                      />
                      </Box>

                      <Box component="form" noValidate autoComplete="off"  style={{position:'relative',left:'58px'}}>
                        <TextValidator id="outlined-name"label="Daily Rate" 
                             value={this.state.formData.dailyRate}
                             onChange={(e) => {
                                 let formData = this.state.formData
                                 formData.dailyRate = e.target.value
                                 this.setState({ formData })
                             }}
                             validators={['required']}
                        />
                        </Box>
                        <Box component="form" style={{position:'relative',left:'83px'}} noValidate autoComplete="off">
                        <TextValidator id="outlined-name"label="Free Km Day"
                               value={this.state.formData.km_for_a_day}
                               onChange={(e) => {
                                   let formData = this.state.formData
                                   formData.km_for_a_day = e.target.value
                                   this.setState({ formData })
                               }}
                               validators={['required']}
                        />
                        </Box>
                      </div> 
                      
                      <div className='Rentfirstflied'>
                        
                        
                        <Box component="form"  style={{position:'relative'}} noValidate autoComplete="off">
                        <TextValidator id="outlined-name"label="Free Km Month"
                             value={this.state.formData.km_for_a_month}
                             onChange={(e) => {
                                 let formData = this.state.formData
                                 formData.km_for_a_month = e.target.value
                                 this.setState({ formData })
                             }}
                             validators={['required']}
                        />
                        </Box>
                        <Box component="form" style={{position:'relative',left:'30px'}} noValidate autoComplete="off">
                        <TextValidator id="outlined-name"label="Monthly Rate"
                           value={this.state.formData.monthlyRate}
                           onChange={(e) => {
                               let formData = this.state.formData
                               formData.monthlyRate = e.target.value
                               this.setState({ formData })
                           }}
                           validators={['required']}
                        />
                        </Box>
                        <Box component="form" style={{position:'relative',left:'58px'}} noValidate autoComplete="off">
                        <TextValidator id="outlined-name"label="Price PerExtra Km"
                         value={this.state.formData.price_per_Extra}
                         onChange={(e) => {
                             let formData = this.state.formData
                             formData.price_per_Extra = e.target.value
                             this.setState({ formData })
                         }}
                         validators={['required']}
                        />
                        </Box>
                        
                        </div>
                      
                        
                      </div>

                      <div class="_Page_vertical-center">
                     <button label={this.state.btnLabelSave} type="submit" className='RatesSaveBTN'>Save</button>
                     <button label={this.state.btnLabelUpdate} type="submit" className='RatesUpdatebTN'>Update</button>
                         </div>
                      </ValidatorForm>

                     

                      </div>
                <div className='RatesecondDiv'>
                <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Rate ID</StyledTableCell>
                            <StyledTableCell align="center">Price PerExtra Km</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">Free Km Month</StyledTableCell>
                            <StyledTableCell align="center">Free Km Day</StyledTableCell>
                            <StyledTableCell align="center">Daily Rate</StyledTableCell>
                            <StyledTableCell align="center">Monthly Rate</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                            

                          </TableRow> 
                        </TableHead>
                        <TableBody>
                         {
                            this.state.data.map((row) => (
                                      <TableRow>
                                        <StyledTableCell align='center'>{row.rental_ratesID}</StyledTableCell>
                                        <StyledTableCell align='center'>{row.price_per_Extra}</StyledTableCell>
                                        <StyledTableCell align='center'>{row.type}</StyledTableCell>
                                        <StyledTableCell align='center'>{row.km_for_a_month}</StyledTableCell>
                                        <StyledTableCell align='center'>{row.km_for_a_day}</StyledTableCell>
                                        <StyledTableCell align='center'>{row.dailyRate}</StyledTableCell>
                                        <StyledTableCell align='center'>{row.monthlyRate}</StyledTableCell>
                                        <StyledTableCell  align="right">
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
  )
 }
}

export default (ManageRentalRates);