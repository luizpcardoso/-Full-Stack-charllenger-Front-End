import { Container } from "./style";
import { TransactionCard } from "../../components/transactionCard";
import { BiLogOut } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import userPerfil from "../../assets/images/image 1.svg";
import { ModalPay } from "../../components/modalPay";
import { useUser } from "../../providers/user";
import { useTransactions } from "../../providers/trasactions";
import { useEffect, useState } from "react";

interface ITransiction {
  createdAt: string;
  transaction_id: string;
  value: number;
  type: string;
}

export const Dashboard = () => {
  const username = localStorage.getItem("@challenge:username") || "";
  const { balance } = useUser();
  const [typeFilter, setTypeFilter] = useState("all");
  const { transactions, renewTransaction, filterTransactionByType } =
    useTransactions();

  useEffect(() => {
    renewTransaction();
  }, [balance]);

  return (
    <Container>
      <ModalPay />
      <section className="user_infos">
        <img src={userPerfil}></img>

        <p>@{username}</p>
        <p>R${balance}</p>
      </section>
      <section className="transactions_list">
        <div className="transaction_filter">
          <button
            className="transaction_filter_in"
            onClick={() => {
              typeFilter == "cashIn"
                ? setTypeFilter("all")
                : setTypeFilter("cashIn");
            }}
          >
            Entradas
          </button>
          <button
            className="transaction_filter_out"
            onClick={() => {
              typeFilter == "cashOut"
                ? setTypeFilter("all")
                : setTypeFilter("cashOut");
            }}
          >
            Saídas
          </button>
        </div>
        <ul>
          {transactions
            ?.filter(
              (tr: ITransiction) =>
                tr.type === typeFilter || typeFilter == "all"
            )
            .map(
              (transaction: {
                createdAt: string;
                transaction_id: string;
                value: number;
                type: string;
              }) => {
                return (
                  <TransactionCard
                    date={new Date(transaction.createdAt) as Date}
                    value={transaction.value as number}
                    type={transaction.type as string}
                    key={transaction.transaction_id}
                  ></TransactionCard>
                );
              }
            )}
        </ul>
      </section>
      <section className="pay_options">
        <button>
          <BiLogOut />
        </button>
        <button>
          <MdAttachMoney />
        </button>
      </section>
    </Container>
  );
};
