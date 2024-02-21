import react, { createContext, useState} from 'react'
import {light, dark} from '../../Components/Temas'

const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    
    const [tema, setTema] = useState('escuro')

    const mudarTema = ()=>{
        setTema(tema === 'claro'? 'escuro' : 'claro')
    }
    return(
        <ThemeContext.Provider value={{tema, mudarTema, temaActual: tema === 'claro'? dark: light}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;