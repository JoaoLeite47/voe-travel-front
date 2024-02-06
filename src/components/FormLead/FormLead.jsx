import React, { useState } from "react";
import "./FormLead.scss";
import { sendEmail } from "../../services/calls";
import { emailError, emailSucess } from "../../assets/alerts";

export default function FormLead() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nome: nome,
      email: email,
      numero: numero,
      mensagem: mensagem,
    };

    try {
      const response = await sendEmail(data);
      if (response.status === 200) {
        emailSucess();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        emailError();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      alert("Falha na comunicação com o servidor");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="form-page-container">
      <div className="content">
        <div>
          <div>
            <h2 className="form-h2">Verifique já a cotação para sua viagem!</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="container-form">
              <input
                type="text"
                placeholder="Qual é o seu nome?"
                className="input-form"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="email"
                placeholder="Qual é o seu Email?"
                className="input-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Qual é o seu número?"
                className="input-form"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Adicione mais informações, como destino ou data da viagem."
                className="input-form"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
              <button type="submit" className="button-form">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
