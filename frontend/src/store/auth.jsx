import { createContext, useContext, useState } from "react";

// context
export const AuthContext = createContext();

// amare marks lavvna chhe
// pachhi cut thai marks
// kainai admin open thai to keje

// provider
export const AuthProvider = ({children})=>{

    const [token,setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLS =(serverToken)=>{
        return localStorage.setItem("token",serverToken); 
    };

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    return <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn}} >
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