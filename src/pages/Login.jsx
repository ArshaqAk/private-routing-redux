import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/authSlice"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [credentials,setCredentials]= useState({
        username:'',
        password:''
    })
    
    const handleLogin = async()=>{
        try {
            let response = await axios.post('https://dummyjson.com/auth/login',credentials)
            if(response.data.accessToken){
                dispatch(login())
            }

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="container">
       <div className="row mt-4">
        <div className="col-lg-4 col-sm-12"></div>
        <div className="col-lg-4 col-sm-12 text-center">
            <div className="box d-flex flex-column align-items-center shadow w-100 p-3 rounded border mt-4">
            <h3>LOGIN</h3>
                <input onChange={(e)=>setCredentials({...credentials,username:e.target.value})} className="form-control mt-1" placeholder="username" type="text" />
                <input onChange={(e)=>setCredentials({...credentials,password:e.target.value})} className="form-control mt-1" placeholder="password" type="password" />
                <button onClick={handleLogin} className="btn btn-primary btn-sm w-25 my-2">Login</button>
            </div>
        </div>
        <div className="col-lg-4 col-sm-12"></div>
       </div>
    </div>
  )
}

export default Login