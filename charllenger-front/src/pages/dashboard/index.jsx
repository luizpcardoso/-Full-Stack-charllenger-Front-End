import { Container } from "./style";
import { TransactionCard } from "../../components/transactionCard";
import userPerfil from "../../assets/images/image 1.svg"
export const Dashboard = () => {



    return (
        <Container>
            <section className="user_infos">

                <img src={userPerfil}></img>

                <p>@luiz</p>
                <p>R$500,00</p>
            </section>
            <section className="transactions_list">
                <div className="transaction_filter">
                    <button className="transaction_filter_in">Entradas</button>
                    <button className="transaction_filter_out">Saídas</button>
                </div>
                <ul>
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />

                </ul>
            </section>
            <section className="pay_options">
                <button>Pagar</button>
            </section>




        </Container>
    )
}