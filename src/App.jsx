import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './pages/Login'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import PrivateRoute from './components/PrivateRoute'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/home' element={ <PrivateRoute><Home/></PrivateRoute> }/>

    </Routes>
    </>
  )
}

export default App
