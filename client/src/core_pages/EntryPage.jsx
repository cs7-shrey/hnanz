import React,{useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"
const EntryPage=()=>{
    const {loginWithRedirect,isAuthenticated,isLoading}=useAuth0();
    const navigate=useNavigate();
    console.log(isLoading,"How")
    useEffect(()=>{
        console.log(isLoading,"Yellow")
        if(!isLoading){
            if(isAuthenticated){
                navigate("/user")
            }
        }
    },[isLoading,isAuthenticated])
    return (
        <div className="entry-main raleway">
            <button className="entry-button glow-box" onClick={loginWithRedirect}>Authenticate</button>
            <div>
                hello world
            </div>
        </div>
    )
}
export default EntryPage
//some comment