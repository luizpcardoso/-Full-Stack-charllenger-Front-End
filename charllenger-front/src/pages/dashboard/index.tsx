import { Container } from "./style";
import { TransactionCard } from "../../components/transactionCard";
import { BiLogOut } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import userPerfil from "../../assets/images/image 1.svg"
import { ModalPay } from "../../components/modalPay";

export const Dashboard = () => {



    return (
        <Container>
            <ModalPay />
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
                <button><BiLogOut /></button>
                <button><MdAttachMoney /></button>
            </section>




        </Container >
    )
}