import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()
// export const Language = createContext()

export const ThemeProvider = ({children}) => {

  const [theme,setTheme]=useState('light')
//   const [language,setlanguage]=useState('english')

    const toggleTheme=()=>{
      setTheme((prevtheme)=>prevtheme=='light'?'dark':'light')
    }
  
    
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {/* <Language.Provider value={language}> */}

  {children}
      {/* </Language.Provider> */}
    </ThemeContext.Provider>
  )
}