import { Children, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  return <AuthContext.Provider value={{}}>{Children}</AuthContext.Provider>;
};
