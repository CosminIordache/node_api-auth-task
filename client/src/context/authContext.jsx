import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from '../api/auth';

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const signup = async (user) => {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true);
        }catch(err){
            setErrors(err.response.data);
        }
    }

    const signin = async (user) => {
        try{
            const res = await loginRequest(user);
            console.log(res);
        }catch(err){
            if(Array.isArray(err.response.data)){
                return setErrors(err.response.data);
            }

            setErrors([err.response.data.message]);
        }
    }

    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 3000)
            return () => clearTimeout(timer)
        }
    },[errors])


    return (
        <authContext.Provider value={{signup, signin, user, isAuthenticated, errors}}>
            {children}
        </authContext.Provider>
    )
}