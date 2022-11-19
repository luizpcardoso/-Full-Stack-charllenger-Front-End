import { Container } from "./style";
import { MdAttachMoney } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTransactions } from "../../providers/trasactions";

interface Data {
  username: string;
  value: string;
}

export const ModalPay = ({ handdleOpen, setHandleOpenModal }: any) => {
  const { transactionSend, renewTransaction } = useTransactions();

  const formSchema = yup.object().shape({
    username: yup.string().required("usuário obrigatório"),
    value: yup
      .number()
      .typeError("insira um valor numérico")
      .required("Valor obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: Data) => {
    console.log(data);
    transactionSend(data);
    renewTransaction();
    reset();
    setHandleOpenModal(false);
  };

  return (
    <Container
      style={handdleOpen == true ? { display: "flex" } : { display: "none" }}
    >
      <section>
        <h2>Pague um amigo!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="usuário" {...register("username")}></input>
          <span>{errors.username ? errors.username.message : ""}</span>
          <input placeholder="R$0,00" {...register("value")}></input>
          <span>{errors.value ? errors.value.message : ""}</span>
          <div className="buttons_form">
            <button
              className="button_cancel"
              type="button"
              onClick={(e) => {
                reset();
                setHandleOpenModal(false);
              }}
            >
              <GiCancel />
            </button>
            <button className="button_send">
              <MdAttachMoney />
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
};
