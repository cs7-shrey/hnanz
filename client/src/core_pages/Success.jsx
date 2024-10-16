import { useAuth0 } from "@auth0/auth0-react";
import {useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";
const Success=()=>{
    const {user,isAuthenticated,logout,isLoading,getAccessTokenSilently}=useAuth0();
    const navigate=useNavigate()
    useEffect(()=>{
        if(!isLoading){
            if(!isAuthenticated){
                navigate("/")
            }
        }
    },[isLoading,isAuthenticated])
    if(!isAuthenticated){
        return (
            <div class="white-loading raleway"><h2>Loading...<br/>Please refresh the page once if you've been waiting for more than 5 seconds(timeout)</h2></div>
        )
    }
    else{
        return (
            <div>
                Successful authentication
                <button onClick={logout}>Logout</button>
            </div>
        )
    }
}
export default Success;