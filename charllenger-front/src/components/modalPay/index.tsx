import { Container } from "./style";
import { MdAttachMoney } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';

export const ModalPay = () => {



    return (
        <Container>
            <section>
                <form>
                    <input placeholder="usuário"></input>
                    <input placeholder="R$0,00"></input>
                    <div className="buttons_form">
                        <button><GiCancel /></button>
                        <button><MdAttachMoney /></button>
                    </div>
                </form>
            </section>
        </Container >
    )
}