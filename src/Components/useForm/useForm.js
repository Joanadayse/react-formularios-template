import { useState } from "react";

export default function useForm(inicialEstado) {
  const [formulario, setFormulario] = useState(inicialEstado);

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };
  const clear = () => {
    setFormulario(inicialEstado);
  };
  // retorna o estado formulario, e a funão de onChange
  return [formulario, onChangeForm, clear];
}
