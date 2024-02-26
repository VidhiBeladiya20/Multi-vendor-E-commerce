import { useAuth } from "../store/auth";
import { Navbar } from "../components/Navbar.jsx";

export const Profile = () =>{

    const { userData } = useAuth();
    // console.log(userData.email);
    return(
        <>
            <Navbar />
            <h1>{userData.email}</h1>
        </>
    )
}