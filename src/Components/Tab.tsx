import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Box, Tab } from "@mui/material";
import Tabs,{TabsProps} from "@mui/material/Tabs";
import { styled } from "@mui/system";
import CSS from 'csstype';
import { Istore } from '../redux'
import { useNavigate } from "react-router-dom";

interface Istyle{
    [key: string]: CSS.Properties
}

const styles : Istyle = {
  Box: {
      width:'fit-content',
      margin:'1.5vw auto auto',
      borderRadius:'10',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px'
  },
  Tab1: {
      color:"#fff",
      width:'150px'
  },
  
  Tab2:{
    color:"#c2e0ff",
    width:'150px'
  },

  routingLink: {
    textDecoration: 'none'
  }

}

const StyledTabs = styled((other) => {

  return (
    <Tabs
      {...other}
      classes={{
        flexContainer: "flexContainer",
        indicator: "indicator",
      }}
      variant="standard"
      TabIndicatorProps={{ children: <span /> }}
      
    />
  );
})({
  "& .indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 60,
      width: "100%",
      backgroundColor: "white"
    }
  },
  "& .flexContainer": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "rgb(0, 127, 255)",

  },
})as React.ComponentType<TabsProps>

function StyledTab() {

  const dispatch = useDispatch();
  
  const globState = useSelector((state: Istore) => state)

  const navigate = useNavigate();

  interface Istate{
    value: number
  }

  function handleChange(event:React.SyntheticEvent, value:number) : void {

    if( value === 0 ){
      dispatch({ type:'updateLink', link:'./', value:0 })
      globState.link !== './'?navigate('../', { replace: true }) : navigate('./', { replace: true })
    }
    else if( value === 1 ){
      dispatch({ type:'updateLink', link:'./profile', value:1 })
      globState.link !== './'?navigate('../profile', { replace: true }):navigate('./profile', { replace: true })
    }
    else if( value === 2 ){
      dispatch({ type:'updateLink', link:'./news', value:2 })
      globState.link !== './'?navigate('../news', { replace: true }):navigate('./news', { replace: true })
    }
    else if( value === 3 ){
        dispatch({ type:'logout', value:3 })
        localStorage.removeItem('token')
        globState.link !== './'?navigate('../login', { replace: true }):navigate('./login', { replace: true })
    }
}


  return (
    <>{ 
      globState.loggedIn && globState.link!=='login' ?
        <Box sx={ styles.Box }>
          <StyledTabs value={ globState.value } onChange={handleChange}>
            <Tab style={ globState.link==='./'?styles.Tab1:styles.Tab2 } label="Main" />
            <Tab style={ globState.link==='./profile'?styles.Tab1:styles.Tab2 } label="Profile" />
            <Tab style={ globState.link==='./news'?styles.Tab1:styles.Tab2 } label="News" />
            <Tab style={ globState.link==='./logout'?styles.Tab1:styles.Tab2 } label="Logout" />
          </StyledTabs>
        </Box>:
      false
      }
    </>
  );
}

export default StyledTab;