import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AplicationContext } from "../../context";
import { ITransacao } from "../../interfaces";
import { Button } from "../Button";
import { FormStyled } from "./style";

export function Form() {
  const { addValue } = useContext(AplicationContext);
  const { register, handleSubmit } = useForm<ITransacao>();

  return (
    <FormStyled onSubmit={handleSubmit(addValue)}>
      <label htmlFor="">Descrição</label>
      <input
        {...register("description")}
        id="description"
        type="text"
        placeholder="Digite aqui sua descrição"
      />
      <span>Ex: Compra de roupas</span>
      <div className="container">
        <div className="container-children">
          <label htmlFor="">Valor</label>
          <input
            {...register("value")}
            id="value"
            type="number"
            placeholder="R$00,00"
          />
        </div>
        <div className="container-children">
          <label htmlFor="">Tipo de valor</label>
          <select {...register("type")} id="type">
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <Button type="submit" text="Inserir valor" />
    </FormStyled>
  );
}
