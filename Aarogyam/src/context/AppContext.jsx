//create context to access common logic fromm this file
import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

const currencySymbol = '$'

  const value = { 
//whatever we add in this can be accessed in any component
      doctors,
      currencySymbol
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider