import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

interface Data {
  username: string;
  password: string;
}
interface Decoded {
  username: string;
}

interface UserProviderData {
  balance: string;
  logout: () => void;
  login: (data: Data) => void;
  signIn: (data: Data) => void;
  children?: React.ReactNode;
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
    () => localStorage.getItem("@challenge:token") || ""
  );
  const [balance, setBalance] = useState<string>("");

  const login = (data: Data) => {
    api
      .post("/api/login", data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("@challenge:token", token);
        setAuthToken(token);
        toast.success("Login efetuado com sucesso");
        if (token) {
          const decoded = jwtDecode(token) as Decoded;
          localStorage.setItem("@challenge:username", decoded.username);

          history.push("/dashboard");
        }
      })
      .catch((error) => toast.error("Nome de usuário ou senha inválidos"));
  };

  const logout = () => {
    localStorage.clear();
    toast.success("Você saiu :`(");
  };

  const getBalance = () => {
    api
      .get("/api/balance", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const balance = response.data.balance;
        setBalance(balance);
      })
      .catch((error) => toast.error("Problema na busca"));
  };
  getBalance();

  const signIn = (data: Data) => {
    api
      .post("/api/user", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        history.push("/");
      })
      .catch((error) => toast.error("Erro no registro"));
  };

  return (
    <UserContext.Provider value={{ login, logout, signIn, balance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
