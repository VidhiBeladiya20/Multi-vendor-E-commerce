import {BrowserRouter,Routes,Route} from "react-router-dom";
// import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {SignUp} from "./pages/SignUp";
import { Login } from "./pages/Login";
export const App=()=>{
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}