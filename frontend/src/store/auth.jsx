import { createContext, useContext, useEffect, useState } from "react";

// context
export const AuthContext = createContext();

// amare marks lavvna chhe
// pachhi cut thai marks
// kainai admin open thai to keje

// provider
export const AuthProvider = ({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [userData,setuserData] = useState("");

    // for set token in localstorage
    const storeTokenInLS =(serverToken)=>{
        return localStorage.setItem("token",serverToken); 
    };

    let isLoggedIn = !!token;

    // delete token in localstorage for logout
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }


    // Jwt Authentication - to get the currrently loggedIn user data
    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/user/user',{
                method:"GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            if(response.ok){
                const res_data = await response.json();
                console.log('user data : ',res_data);
                setuserData(res_data.userData);
            }
        } catch (error) {
            console.error("error fethicng user data");
        }
    }

    useEffect(()=>{
        userAuthentication();
    },[])

    return <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn, userData}} >
        {children}
        </AuthContext.Provider>
}

//consumer
export const useAuth=()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
}
