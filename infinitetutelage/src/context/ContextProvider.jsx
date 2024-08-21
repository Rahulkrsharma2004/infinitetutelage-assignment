import { createContext, useState } from "react"

export const Context = createContext()


const ContextProvider = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Context.Provider value={{sidebarOpen,setSidebarOpen}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider