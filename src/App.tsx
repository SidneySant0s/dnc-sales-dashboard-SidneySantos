import { BrowserRouter as Router, Route, Routes, Navigate, Outlet} from "react-router-dom"
import Cookies from "js-cookie"
import { Home, Leads, Login, Profile, Registration} from "./pages"

function App() {
<<<<<<< HEAD
  const ProtectedRoute = () => {
=======
  const ProtectedRouted = () => {
>>>>>>> 0c988019228c04489cffe701b8218bf55dc64b61
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
<<<<<<< HEAD
        <Route element={<ProtectedRoute />}>
=======
        <Route element={<ProtectedRouted />}>
>>>>>>> 0c988019228c04489cffe701b8218bf55dc64b61
          <Route path="/home" element={<Home/>}/>
          <Route path="/leads" element={<Leads/>}/>
          <Route path="/Perfil" element={<Profile/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
