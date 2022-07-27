
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function MyFormHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return 'This field is being focused';
      }
  
      return 'Helper text';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
}

export default function  LoginPage(){

   
   
    return(
       <>
          


          <main>

            <section class="login_Page">
                <div class="first_slider">
                  
                </div>
                <div  class="second-slider">
                <h1>Sign in</h1>


                <Box component="form" noValidate autoComplete="off">
                  
                <FormControl sx={{ width: '60ch'}} style={{position:"relative",left:"70px",top:"160px"}}>
                <InputLabel shrink htmlFor="bootstrap-input"  style={{position:"relative",top:"10px",fontWeight:"bold"}}>Email address </InputLabel>
                <OutlinedInput placeholder="Please enter text" />
                <MyFormHelperText />
                </FormControl>
                 </Box>


                 <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '60ch' }} style={{position:"relative",top:"",left:"70px",top:"180px"}}>
                <InputLabel shrink htmlFor="bootstrap-input" style={{position:"relative",top:"10px",fontWeight:"bold"}}>Password</InputLabel>
                <OutlinedInput placeholder="Please enter text" />
                <MyFormHelperText />
                </FormControl>
                 </Box>

               

                 <div class="vertical-center">
                     <button><Link to="/Booking">Login</Link> </button>
                     <p>Don't have an account ?<a href=""><Link to="/CreateAccountPage">Sign up</Link></a></p>
                 </div>

                </div>
            </section>


          </main>

       
       </>
    );
}


