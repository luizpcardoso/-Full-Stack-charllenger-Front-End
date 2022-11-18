import { Container } from "./style";

interface TrasactionCard {
  date: Date;
  value: number;
  type: string;
}

export const TransactionCard = ({ date, value, type }: TrasactionCard) => {
  return (
    <Container>
      <p>{type == "cashOut" ? "Saída" : "Entrada"}</p>
      <p className="date">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>

      <p className={type == "cashOut" ? "saida" : "entrada"}>
        {type == "cashIn" ? `R$${value.toFixed(2)}` : `-R$${value.toFixed(2)}`}
      </p>
    </Container>
  );
};
