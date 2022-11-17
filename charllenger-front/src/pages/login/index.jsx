import { Container } from "./style";

export const Login = () => {



    return (
        <>
            <Container>
                <section>
                    <div className="div_details"></div>
                    <div className="div_login">


                        <form>
                            <h2>Login</h2>
                            <input className="user_input" placeholder="usuário"></input>
                            <input className="password_input" type="password" placeholder="password" ></input>
                            <div className="div_login_buttons">
                                <button>Cadastrar</button>
                                <button>Entrar</button>
                            </div>

                        </form>



                    </div>
                </section>

            </Container>
        </>
    )
}