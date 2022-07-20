
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import './createStyle.css';

export default function  CreateAccountPage(){

    return(
        <>
              <main>
                  
                    <div class="main_header">
                     <h1 style={{textAlign: "center"}}>Sign up</h1>
                     <h2>Create Account</h2>
                    </div>

                <section class="login_Page">

                 <div class="first_slider">
                 <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" sx={{ width: '40ch'}} style={{position:"relative",left:"70px",top:"150px"}}>
                  <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>NIC Number</InputLabel>
                  <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
                  <div class="upload-NIC">
                   <Stack direction="row" spacing={2} style={{position:"absolute"}}>
                    <Button variant="contained" component="label" style={{backgroundColor:"#D5FB91",color:"black",height:"40px"}}>Upload<input hidden accept="image/*" multiple type="file" /> 
                    <IconButton  component="label" style={{color:"black"}}><input hidden accept="image/*"/><PhotoCamera /></IconButton>
                    </Button>
                    </Stack>
                    </div>
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"170px"}}>
                  <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>Email address </InputLabel>
                  <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"190px"}}>
                  <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>New Password</InputLabel>
                  <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"210px"}}>
                  <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>Full Name</InputLabel>
                  <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
                   </Box>
                 </div>
               
                <div  class="second-slider">
                <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"150px"}}>
                  <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>Address </InputLabel>
                  <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"170px"}}>
                  <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>Contact</InputLabel>
                  <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
                   </Box>
                   <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" sx={{ width: '40ch'}} style={{position:"relative",left:"70px",top:"190px"}}>
                  <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>Driving License Number</InputLabel>
                  <OutlinedInput placeholder="Please enter text" />
                  </FormControl>
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
                 <div class="vertical-center">
                     <button>Register</button>
                  </div>
                </main>
        </>
    )

}