// import * as React from 'react';
// import { useState } from 'react';

// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import './Style.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import { UserContext } from '../context/UserContext';
// const defaultTheme = createTheme();
// let username = "Naveen";

// export default function Login() {

//         const navigate = useNavigate();
//         const [user,setUser] = useState({
//             "email" : "",
//             "password" : ""
//         });
//         const {login} = React.useContext(UserContext);
//         const [customers,setCustomers] = useState([]);
//         const [loginMessage, setLoginMessage] = useState("");
//         const [success, setSuccess] = useState(true);

//         const addUser=(event)=>{
//         setSuccess(true);
//         setUser({...user,[event.target.name]:event.target.value})
//         }
        
//         const handleSubmit = async (event) => {
//             event.preventDefault();
//             fetch("http://localhost:8080/getCustomers")
//                 .then(res => res.json())
//                 .then((result) => {
//                     setCustomers(result);
//                     console.log("Fetched customers:", result);
//                     console.log("Fetched customers:", customers);
//                     const { email, password } = user;
//                     const loggedInCustomer = result.find(
//                         (customer) => customer.email === email && customer.password === password
//                     );
//                     if (loggedInCustomer) {
//                         setSuccess(true);
//                         setLoginMessage("Login successful!");
//                         login(loggedInCustomer);
//                         navigate('/');
//                     } else {
//                         setSuccess(false);
//                         setLoginMessage("Invalid email or password.");
//                     }
//                 })
//                 .catch((error) => {
//                     setSuccess(false);
//                     setLoginMessage("Error fetching customers.");
//                     console.error("Error fetching customers:", error);
//                 });

        
        

//       };

//     return (
//         <div className='total'>
//             <div className='login-image-container'>
//                 <img src='https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_640.jpg' />
//             </div>
//             <div className='login-container'>
//             <ThemeProvider theme={defaultTheme} >
//                 <Container component="main" maxWidth="xs" className='userContainer' >
//                     <CssBaseline />
//                     <Box 
//                         sx={{
//                             marginTop: 2,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'black' }}>
//                                 <Link to="/">
//                                     <LockOutlinedIcon />
//                                 </Link>
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Login
//                         </Typography>
//                         <Box component="form"
//                               onSubmit={handleSubmit} 
//                             noValidate sx={{ mt: 1 }}>
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                                 autoFocus
//                               onChange={addUser}
//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="current-password"
//                                 style={{ backgroundColor: 'white' }}
//                               onChange={addUser}
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox value="remember" color="primary" />}
//                                 label="Remember me"
//                             />
//                             <Box sx={{ textAlign: 'center', color: success ? 'green' : 'red', my: 2 }}>
//                                 {loginMessage}
//                             </Box>
                            
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Sign In
//                             </Button>

//                             <Grid container>
//                                 <Grid item xs>
//                                     <Link href="#" variant="body2">
//                                         Forgot password?
//                                     </Link>
//                                 </Grid>
//                                 <Grid item>
//                                     <Typography>
//                                         Don't have an account?{' '}
//                                         <Link to="/register" variant="body2">
//                                             SignUp
//                                         </Link>
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Box>
//                 </Container>
//             </ThemeProvider>
//             </div>
//         </div>
//     );

// }

// export { username }; 





import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';
import { UserContext } from '../context/UserContext';

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const { login } = useContext(UserContext);
    const [customers, setCustomers] = useState([]);
    const [loginMessage, setLoginMessage] = useState("");
    const [success, setSuccess] = useState(true);

    const addUser = (event) => {
        setSuccess(true);
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/getCustomers")
            .then(res => res.json())
            .then((result) => {
                setCustomers(result);
                const { email, password } = user;
                const loggedInCustomer = result.find(
                    (customer) => customer.email === email && customer.password === password
                );
                if (loggedInCustomer) {
                    setSuccess(true);
                    setLoginMessage("Login successful!");
                    login(loggedInCustomer);
                    navigate('/');
                } else {
                    setSuccess(false);
                    setLoginMessage("Invalid email or password.");
                }
            })
            .catch((error) => {
                setSuccess(false);
                setLoginMessage("Error fetching customers.");
                console.error("Error fetching customers:", error);
            });
    };

    return (
        <div className="login-page">
            <div className="login-form-container">
                <div className="login-form">
                    <h1 className="login-title">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={addUser}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={addUser}
                            required
                        />
                        <button type="submit" className="login-button">Sign In</button>
                        <div className="login-options">
                            <Link to="#" className="forgot-password">Forgot password?</Link>
                            <span className="signup-prompt">
                                Don't have an account? <Link to="/register">SignUp</Link>
                            </span>
                        </div>
                        {loginMessage && (
                            <div className={`login-message ${success ? 'success' : 'error'}`}>
                                {loginMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
