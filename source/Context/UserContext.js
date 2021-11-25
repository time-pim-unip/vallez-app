import React, { useState, useEffect, useContext } from "react";

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState({});
    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUser = () => React.useContext(UserContext)