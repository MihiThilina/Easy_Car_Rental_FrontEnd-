import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Component } from 'react';

import user from "../../service/user"
import { Link } from 'react-router-dom';

import './style.css';


class LoginPage extends Component {


  constructor(props) {
    super(props)
    var path 
    this.state = {
      FormData: {
        userName: '',
        password: ''
      },
      data: []
    }
  }

  updateUser = (data) => {
    console.log(data)
    this.setState({
      FormData: {
        userName: data.userName,
        password: data.password
      }
    });
  };
  


  submitLLogin = async () => {
    let formData = this.state.FormData;
    let res = await user.PutUser(formData);
    if(res.data.message == 'Customer'){
      this.path ='CustomerProflie';
    }
  }




  render() {
    return (

      <>
        <main>

          <section class="login_Page">
            <div class="first_slider">

            </div>
            <div class="second-slider">
              <h1>Sign in</h1>


              <Box component="form" noValidate autoComplete="off">

                <FormControl sx={{ width: '60ch' }} style={{ position: "relative", left: "70px", top: "160px" }}
                  value={this.state.FormData.userName}
                  onChange={(e) => {
                    let FormData = this.state.FormData
                    FormData.userName = e.target.value
                    console.log(FormData.userName)
                    this.setState({ FormData })
                  }}

                >
                  <InputLabel shrink htmlFor="bootstrap-input" style={{ position: "relative", top: "10px", fontWeight: "bold" }}

                  >Email address </InputLabel>
                  <OutlinedInput placeholder="Please enter text" />

                </FormControl>
              </Box>


              <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '60ch' }} style={{ position: "relative", top: "", left: "70px", top: "180px" }}
                  value={this.state.FormData.password}
                  onChange={(e) => {
                    let FormData = this.state.FormData
                    FormData.password = e.target.value
                    console.log(FormData.password)
                    this.setState({ FormData })
                  }}
                >
                  <InputLabel shrink htmlFor="bootstrap-input" style={{ position: "relative", top: "10px", fontWeight: "bold" }}


                  >Password</InputLabel>
                  <OutlinedInput placeholder="Please enter text" />

                </FormControl>
              </Box>



              <div class="vertical-center">
                <button onClick={this.submitLLogin}
                   
                > <Link to='path'></Link>  Login </button>
                <p>Don't have an account ?<a href=""><Link to="/CreateAccountPage">Sign up</Link></a></p>
              </div>

            </div>
          </section>


        </main>
      </>

    )
  }


}

export default LoginPage;

