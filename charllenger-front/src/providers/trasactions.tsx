import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

interface TransactionsProviderData {
  transactions: [];
  renewTransaction: () => void;
  filterTransactionByType: (type: string) => void;
}
interface TransactionProps {
  children: ReactNode;
}
interface ITransaction {
  type: string;
}

export const TransactionContext = createContext<TransactionsProviderData>(
  {} as TransactionsProviderData
);

export const TransactionsProvider = ({ children }: TransactionProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@challenge:token") || ""
  );

  const [transactions, setTransactions] = useState<[]>([]);

  const [filterbytype, setFilterByType] = useState("all");

  const renewTransaction = async () => {
    await api
      .get("/api/transactions", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(async (response) => {
        const cashIn = response.data.cashIn.map((e: { type: string }) => {
          return { ...e, type: "cashIn" };
        });
        const cashOut = response.data.cashOut.map((e: { type: string }) => {
          return { ...e, type: "cashOut" };
        });
        await setTransactions([...cashOut, ...cashIn] as []);
      })
      .catch((error) => toast.error("Problema na busca"));
  };

  const filterTransactionByType = async (type: string) => {
    await renewTransaction();
    const newTransactions = transactions.filter(
      (tr: ITransaction) => tr.type === type
    );

    setTransactions(newTransactions as []);
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, renewTransaction, filterTransactionByType }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
