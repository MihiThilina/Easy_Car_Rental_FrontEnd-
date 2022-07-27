import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CarsService from "../../../service/CarsService"
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import "./manageCarStyle.css"
import { Component } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




class  ManageCar extends Component {

  constructor(props){
    super(props)
    this.state={
      formData:{
        registration_Number:'',
        brand:'',
        type:'',
        passengers:'',
        transmission_type:'',
        fuel_Type:'',
        color:'',
        rental_rates:{
          rental_ratesID:'',
          price_per_Extra:'',
          type:'',
          km_for_a_month:'',
          km_for_a_day:'',
          dailyRate:'',
          monthlyRate:''
        }
      },
      btnLabelSave: 'save',
      btnColor: 'primary',
      data:[]
    }
  }

  submitCars = async () => {
    let formData = this.state.formData;
    console.log("form data : " + JSON.stringify(formData))
    let res = await CarsService.postCars(formData);
    
    console.log(res);

    if(res.status === 200){
        //  this.clearFields();
    }else{}
  };

  exampleForMap = () =>{
    this.state.data.map((value,index) =>{
      console.log(value.index)
    });
  }

  
  loadData = async () =>{
    // console.log("load method Calling")
    let res =await CarsService.GetCars();
    console.log("Car data " + res.data.data);
  
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

        <div className='fristDiv'>

        <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCars} > 

              <div className='textFildSection'>
              <div className='firstflied'>
              <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextValidator id="outlined-name"label="Registration Number"
               value={this.state.formData.registration_Number}
               onChange={(e) => {
                   let formData = this.state.formData
                   formData.registration_Number = e.target.value
                   this.setState({ formData })
               }}
               validators={['required']}
              />
              </Box>
              <Box component="form" style={{position:"relative",left:"20px"}} sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextValidator id="outlined-name"label="Brand"
               value={this.state.formData.brand}
               onChange={(e) => {
                   let formData = this.state.formData
                   formData.brand = e.target.value
                   this.setState({ formData })
               }}
               validators={['required']}
              />
              </Box>
              <Box component="form" style={{position:"relative",left:"30px"}} sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
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
              <Box component="form" style={{position:"relative",left:"30px"}} sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextValidator id="outlined-name"label="Transmission Type"
               value={this.state.formData.transmission_type}
               onChange={(e) => {
                   let formData = this.state.formData
                   formData.transmission_type= e.target.value
                   this.setState({ formData })
               }}
               validators={['required']}
              />
              </Box>
              </div>

              <div className='firstflied'>
              <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextValidator id="outlined-name"label="Fuel Type"
               value={this.state.formData.fuel_Type}
               onChange={(e) => {
                   let formData = this.state.formData
                   formData.fuel_Type = e.target.value
                   this.setState({ formData })
               }}
               validators={['required']}
              />
              </Box>
              <Box component="form" style={{position:"relative",left:"20px"}} sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextValidator id="outlined-name"label="Color"
               value={this.state.formData.color}
               onChange={(e) => {
                   let formData = this.state.formData
                   formData.color = e.target.value
                   this.setState({ formData })
               }}
               validators={['required']}
              />
              </Box>
              <Box component="form" style={{position:"relative",left:"30px"}}sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextValidator id="outlined-name"label="Rental RatesID"
               value={this.state.formData.rental_rates.rental_ratesID}
               onChange={(e) => {
                   let formData = this.state.formData
                   formData.rental_rates.rental_ratesID = e.target.value
                   this.setState({ formData })
               }}
               validators={['required']}
              />
              </Box>
              <Box component="form" style={{position:"relative",left:"30px"}}sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextValidator id="outlined-name"label="Passengers"
               value={this.state.formData.passengers}
               onChange={(e) => {
                   let formData = this.state.formData
                   formData.passengers = e.target.value
                   this.setState({ formData })
               }}
               validators={['required']}
              />
              </Box>
              
              </div>
              </div>
              <div className='textFildSectionTwo'>
                   <button label={this.state.btnLabelSave} type="submit" className='savebtn'>Save</button>
                   <button className='updatebtn'>Update</button>
              </div>
              </ValidatorForm>


        </div>

        <div className='secondDiv'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Registration Number</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Passengers</StyledTableCell>
            <StyledTableCell align="right">Transmission Type</StyledTableCell>
            <StyledTableCell align="right">Fuel Type</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">RentalRate Id</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
              {
                this.state.data.map((row) =>(
                  <TableRow>
                  <StyledTableCell align='center'>{row.registration_Number}</StyledTableCell>
                  <TableCell align='center'>{row.brand}</TableCell>
                  <TableCell align='center'>{row.type}</TableCell>
                  <TableCell align='center'>{row.passengers}</TableCell>
                  <TableCell align='center'>{row.transmission_type}</TableCell>
                  <TableCell align='center'>{row.fuel_Type}</TableCell>
                  <TableCell align='center'>{row.color}</TableCell>
                  <TableCell align='center'>{row.rental_rates.rental_ratesID}</TableCell>
                  <TableCell align='center'>
                  <Tooltip title="Delete"><IconButton
                                        onClick={() => {
                                            this.deleteCars(row.rental_ratesID)
                                        }}
                                    ><DeleteIcon color="error" /></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit"><IconButton
                                        onClick={() => {
                                            console.log("edit icon clicked!")
                                            this.updateCars(row);
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
        </div>

      </section>

    </main>
    </>
  );
  }


}

export default (ManageCar);