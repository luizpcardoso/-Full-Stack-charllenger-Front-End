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
  signIn: (data: Data) => void;
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
        const token = response.data.token;
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

  const signIn = (data: Data) => {
    api
      .post("/api/user", data)
      .then((response) => {
        const user = response.data.username;
        console.log(user);
        localStorage.setItem("@challenge:username", user);
        toast.success("Cadastro realizado com sucesso");
        history.push("/");
      })
      .catch((error) => toast.error("Nome de usuário ou senha inválidos"));
  };

  return (
    <UserContext.Provider value={{ login, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
