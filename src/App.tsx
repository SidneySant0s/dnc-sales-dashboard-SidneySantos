import { BrowserRouter as Router, Route, Routes, Navigate, Outlet} from "react-router-dom"
import Cookies from "js-cookie"
import { Home, Leads, Login, Profile, Registration} from "./pages"

function App() {
  const ProtectedRouted = () => {
    const checkAuthCookie = Cookies.get('Authorization')
    if (!checkAuthCookie){
      alert('Autenticação necessária')
      return <Navigate to='/' replace/>
    }

    return <Outlet />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
        <Route element={<ProtectedRouted />}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/leads" element={<Leads/>}/>
          <Route path="/Perfil" element={<Profile/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
