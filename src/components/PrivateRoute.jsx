import { useSelector } from "react-redux"
import Login from "../pages/Login"

const PrivateRoute = ({children}) => {
    const authstate = useSelector(state=>state.auth)
    return authstate? children : <Login/>

}

export default PrivateRoute