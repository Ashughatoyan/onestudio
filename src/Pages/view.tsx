import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Istore } from '../redux'

function View(){

    const globState = useSelector((state: Istore) => state)
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    return(
        <>
            <Button onClick={ () => { 
                dispatch({ type:'updateLink', link:'./news', value:2 })
                navigate('../news'); 
            } }>back</Button>
            <Typography>{ globState.item?.description }</Typography>
            <img src={ globState.item?.url } />
        </>
    )
}

export default View