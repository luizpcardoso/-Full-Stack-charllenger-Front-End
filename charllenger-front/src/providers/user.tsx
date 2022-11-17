import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

interface Data {
  username: string;
  password: string;
}

interface UserProviderData {
  logout: () => void;
  login: (data: Data) => void;
}
interface UserProps {
  children: ReactNode;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const login = (data: Data) => {
    api
      .post("/api/login", data)
      .then((response) => {
        const token = response.data.accessToken;
        localStorage.setItem("@challenge:token", token);
        setAuthToken(response.data.accessToken);
        toast.success("Login efetuado com sucesso");
        history.push("/dashboard");
      })
      .catch((error) => toast.error("Nome de usuário ou senha inválidos"));
  };

  const logout = () => {
    localStorage.clear();
    toast.success("Você saiu :`(");
  };

  return (
    <UserContext.Provider value={{ login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);