import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Typography, Box, TextField, Button } from '@mui/material';
import { Istore } from '../redux'

import CSS from 'csstype';

  interface Istyle{
    [key: string]: CSS.Properties
  }
  
  const loginPageStyles: Istyle = {
    mainBox:{
      fontFamily: 'Poppins,sans-serif',
      paddingTop: '10vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    label:{
      marginTop: '15px',
      marginBottom: '40px',
      fontWeight: 400,
      fontSize: '1.25rem',
      fontFamily: 'Poppins,sans-serif'
    },
    loginBox:{
      width:'28vw',
      maxWidth: '440px',
      paddingBottom:'2vw',
      marginBottom:'5vw',
      borderRadius: '6px',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems:'center',
      flexDirection: 'column'
    },
    boxLabel:{
      marginTop: '1.4vw',
      fontWeight: 400,
      fontSize: '1.75rem',
    },
    notice1:{
      marginTop: '1vw',
      fontSize: '13px',
      color: '#888',
      marginBottom: 0
    },
    notice2Box:{
      marginTop: '0.5vw',
      padding: '10px',
      width: 'calc(22vw - 20px)',
      textAlign:'center',
      borderRadius: '5px',
      backgroundColor: '#6fb0f9',
    },
    notice2:{
      fontSize: '.875rem',
      color: '#495258',
    },
    input:{ 
      width:'22vw',
      marginTop: '1vw'
    },
    button:{
      width:'22vw',
      marginTop: '1vw',
      backgroundColor: '#6fb0f9'
    }
  }

export function LoginPage(){

  interface Ilogin { login:string , password:string, err:boolean }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const globState = useSelector((state: Istore) => state)


  useEffect( () => { 
    if( !globState.loggedIn && localStorage.getItem('token') ){
      dispatch({ type:'login', link:'./', value:0 })
      navigate('../')
    }
   }, [] )

  const [state, setState] = useState<Ilogin>({login: '', password:'', err:false});

    return(
        <>
            <Box sx={ loginPageStyles.mainBox } >
            <Typography variant="h1" sx={ loginPageStyles.label } >Sing App React</Typography>
            <Box sx={ loginPageStyles.loginBox }>
                <Typography sx={ loginPageStyles.boxLabel } >Login to your Web App</Typography>
                <Typography sx={ loginPageStyles.notice1 } >Use your email to sign in.</Typography>
                <Box sx={ loginPageStyles.notice2Box }>
                <Typography sx={ loginPageStyles.notice2 } >
                    For user with "admin" role use"admin@flatlogic.com / password" to login!
                </Typography>
                </Box>
                <TextField 
                  sx={ loginPageStyles.input } 
                  error={state.err}
                  label="Login" 
                  variant="outlined" 
                  value={state.login}
                  onChange={ (e : any) => { setState( (prevState : Ilogin) => ({ ...prevState, login:e.target.value, err:false })) } }
                />
                <TextField 
                  sx={ loginPageStyles.input } 
                  error={state.err}
                  label="password"
                  type="password" 
                  variant="outlined"
                  value={state.password}
                  onChange={ (e : any) => { setState( (prevState : Ilogin) => ({ ...prevState, password:e.target.value, err:false })) } }
                  />
                <Button 
                  sx={ loginPageStyles.button } 
                  onClick={ () => { 
                    if( state.login==='admin' && state.password == '1234' ){
                      localStorage.setItem('token', 'psdadjarffswdjopeu1298eyqwu9dgqwiybr13iurh')
                      dispatch({ type:'login', link:'./', value:0 })
                      navigate("../")
                    }
                    else{ console.log(state);setState( (prevState : Ilogin) => ({ ...prevState, login:'', password:'', err:true })) }
                    }
                  }
                >
                  Login
                </Button>
            </Box>
            </Box>
        </>
    )
}