import React,{ useEffect } from 'react'
import Json from '../assets/data.json';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Istore } from '../redux'
import StyledTab from '../Components/Tab'


function NewsPage(){

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
                dispatch({ type:'login', loggedIn:true, link:'./news', value:2 }):
                navigate("./login", { replace: true })
            }
    })

    interface Iitem { url:string, id:number, description:string }

    function newPage( item : Iitem ): void {
        dispatch({ type:'viewMore', item:item, link:'/view' })
        navigate('../view')
    }

    return(
        <>
        <StyledTab/>
        <Box sx={{ margin:'10vw' }}>
            {
                Json.map(( item : Iitem, index:number ) => ( 
                    <Box key={index} sx={{ marginTop:'2vw', display:'flex', flexDirection:'column',alignItems:'center' }}>
                        <Typography>{item.description}</Typography>
                        <Button onClick={ () => { newPage(item) } } >more</Button>
                    </Box>
                ))
            }
        </Box>
        </>
    )
}

export default NewsPage