import { createContext, useState, FC } from "react";
import { AuthContextState } from "./types";

const contextDefaultValues: AuthContextState = {
  currentAccount: '',
  setCurrentAccount: (account: string) => {},
  loading: false,
  setLoading: (loading: boolean) => {},
};

export const AuthContext = createContext<AuthContextState>(
  contextDefaultValues
);

const AuthProvider: FC = ({ children }) => {
  const [currentAccount, setcurrentAccount] = useState<string>(contextDefaultValues.currentAccount);
  const [loading, setloading] = useState<boolean>(contextDefaultValues.loading);
 
  const setCurrentAccount = (account: string) => setcurrentAccount(account);
  const setLoading = (loading: boolean) => setloading(loading)


  return (
    <AuthContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;