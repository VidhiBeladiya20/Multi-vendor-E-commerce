import {BrowserRouter,Routes,Route} from "react-router-dom";
// import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {SignUp} from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Shop } from "./pages/Shop" ;
import { Error } from "./pages/Error";

export const App=()=>{
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}
