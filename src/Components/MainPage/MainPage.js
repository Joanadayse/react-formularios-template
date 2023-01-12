import React from "react";
import { MainContainer, Form, Input } from "./styles";
import useForm from "../useForm/useForm";

function MainPage() {
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")
  // passo1

  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const [formulario, onChangeForm, clear] = useForm({
    nome: "",
    idade: "",
    email: "",
    profissao: ""
  });

  const handleClick = (event) => {
    event.preventDefault();
    clear();

    console.log(
      `nome: ${formulario.nome}, idade: ${formulario.idade}, e-mail: ${formulario.email} , profissao:${formulario.profissao} `
    );
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          id="nome"
          name="nome"
          type="text"
          // passo2
          value={formulario.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          id="idade"
          name="idade"
          type="number"
          // passo2
          value={formulario.idade}
          onChange={onChangeForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          id="email"
          name="email"
          type="text"
          // passo2
          value={formulario.email}
          onChange={onChangeForm}
        />

        <label htmlFor="proficao">Profissão:</label>
        <Input
          id="profissao"
          name="profissao"
          type="text"
          pattern="/^([A-Za-z]\s?){3,20}$/g"
          title="minimo 3 letras, maximo 20"
          // passo2
          value={formulario.profissao}
          onChange={onChangeForm}
          required
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
