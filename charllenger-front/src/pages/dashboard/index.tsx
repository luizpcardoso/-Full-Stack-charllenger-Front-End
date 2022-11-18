import { Container } from "./style";
import { TransactionCard } from "../../components/transactionCard";
import { BiLogOut } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import userPerfil from "../../assets/images/image 1.svg";
import { ModalPay } from "../../components/modalPay";
import { useUser } from "../../providers/user";
import { useTransactions } from "../../providers/trasactions";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { TransactionsList } from "../../components/ListTransactions";

interface ITransiction {
  createdAt: string;
  transaction_id: string;
  value: number;
  type: string;
}

export const Dashboard = () => {
  const history = useHistory();
  const username = localStorage.getItem("@challenge:username") || "";
  const { balance, logout, getBalance } = useUser();
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDAteFilter] = useState("");
  const [handleOpenModal, setHandleOpenModal] = useState(false);
  const { transactions, renewTransaction, transactionSend } = useTransactions();

  const token = localStorage.getItem("@challenge:token");
  if (!token) {
    toast.error("Faça login para acessar esta página");
    history.push("/");
  }

  useEffect(() => {
    renewTransaction();
    getBalance();
  }, [handleOpenModal]);

  return (
    <Container>
      <ModalPay
        handdleOpen={handleOpenModal}
        setHandleOpenModal={setHandleOpenModal}
      />
      <section className="user_infos">
        <img src={userPerfil}></img>

        <p>@{username}</p>
        <p>R${Number(balance).toFixed(2)}</p>
      </section>

      <TransactionsList />
      <section className="pay_options">
        <button
          onClick={() => {
            logout();
          }}
        >
          <BiLogOut />
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();

            setHandleOpenModal(true);
          }}
        >
          <MdAttachMoney />
        </button>
      </section>
    </Container>
  );
};
