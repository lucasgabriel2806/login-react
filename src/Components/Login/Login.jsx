import { useState } from "react";

import "./Login.css";

import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log("teste:", username, password);

    console.log("Envio");

  }

  return (

    <div className="container">

        <form onSubmit={handleSubmit}>

            <h1>Acesse o sistema</h1>

            <div>

                <input type="email" placeholder="E-mail"
                onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon" />

            </div>

            <div>

                <input type="password" placeholder='Senha' />
                <FaLock className="icon" />

            </div>

            <div className="recall-forget">

                <label htmlFor="">

                    <input type="checkbox" />
                    Lembre de mim

                </label>

                <a href="#">Esqueceu a senha?</a>

            </div>

            <button>Entrar</button>

            <div className="signup-link">

                <p>
                    Não tem uma conta? 
                    <a href="#">Registrar</a> 
                </p>

            </div>

        </form>

    </div>

  )

}

export default Login;
