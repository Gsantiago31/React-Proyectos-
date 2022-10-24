import { useState } from "react";
import { UserContext } from "./UserContext"

// const user = {
//     id: 11245,
//     name: 'Santiago Gómez',
//     email: 'gomezgu31@gmail.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{hola: 'Mundo', user}}>
    <UserContext.Provider value={{user, setUser}}>
        { children }
    </UserContext.Provider>
  )
}
