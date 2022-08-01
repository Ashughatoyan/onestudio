import React,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Istore } from '../redux'
import StyledTab from '../Components/Tab'

interface Props {
    value?: string;
}

const MainPage: React.FC<Props> = (props) => {
    
    const globState = useSelector((state: Istore) => state)
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect( () => {
        if( !globState.loggedIn ){
            localStorage.getItem('token')?
                dispatch({ type:'login', loggedIn:true, link:'./', value:0 }):
                navigate("./login", { replace: true })
            }
    })
    
    return(<>
        <StyledTab/>
        <div style={{ width:'100%',textAlign:'center',marginTop:'3vw' }}>main page</div>
    </>
    )
};

export default MainPage