import { useDispatch } from "react-redux"
import { logout } from "../Redux/authSlice"

const Home = () => {
  const dispatch= useDispatch()
  return (
    <div className="container text-center">
        <h1 className="text-center">Home page</h1>
        <button onClick={()=>dispatch(logout())} className="btn btn-danger btn-sm">Logout</button>
    </div>
  )
}

export default Home