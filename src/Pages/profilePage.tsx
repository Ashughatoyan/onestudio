import React,{ useEffect } from 'react'
import Json from '../assets/data.json';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Istore } from '../redux'
import StyledTab from '../Components/Tab'


function ProfilePage(){

    interface Iitem{
        id:number,
        url:string,
        description:string
    }

    const globState = useSelector((state: Istore) => state)
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect( () => {
        if( !globState.loggedIn ){
            localStorage.getItem('token')?
                dispatch({ type:'login', loggedIn:true, link:'./profile', value:1 }):
                navigate("./login", { replace: true })
            }
    })

    return(
        <>
        <StyledTab/>
        <div style={{ width:'100%',textAlign:'center',marginTop:'3vw' }}>profile</div>
        </>
    )
}

export default ProfilePage