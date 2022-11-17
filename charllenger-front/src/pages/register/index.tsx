import { Container } from "./style";

export const Register = () => {



    return (
        <>
            <Container>
                <section>
                    <div className="div_details"></div>
                    <div className="div_login">


                        <form>
                            <h2>Cadastro</h2>
                            <input className="user_input" placeholder="usuário"></input>
                            <input className="password_input" type="password" placeholder="password" ></input>
                            <div className="div_login_buttons">
                                <button>Voltar</button>
                                <button>Concluir</button>
                            </div>

                        </form>



                    </div>
                </section>

            </Container>
        </>
    )
}