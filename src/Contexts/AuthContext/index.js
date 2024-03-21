import AsyncStorage from '@react-native-async-storage/async-storage'
import react, { createContext, useState} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(null)

    const Login = async(token)=>{
        try{
            await AsyncStorage.setItem('token', token)
            setToken(token)
        }catch(error){
            alert(error)
        }
    }
    const Logout = async()=>{
        try{
            await AsyncStorage.removeItem('token')
            setToken(null)
        }catch(error){
            alert(error)
        }
    }
    return(
        <AuthContext.Provider value={{token, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;