import { useState } from "react";

import "./Login.css";

import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    alert("Enviando dados: " + username + " - " + password);

  }

  return (

    <div className="container">

        <form onSubmit={handleSubmit}>

            <h1>LOG IN</h1>

            <div className="input-field">

                <input type="email" placeholder="E-mail"
                required
                onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon" />

            </div>

            <div className="input-field">

                <input type="password" placeholder="Senha" 
                required
                onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon" />
                <FaLockOpen style={{display: "none"}} className="icon" />
                

            </div>

            <div className="recall-forget">

                <label htmlFor="lembre-de-mim">

                    <input type="checkbox" id="lembre-de-mim" />
                    Lembre de mim

                </label>

                <a href="#">Esqueceu a senha?</a>

            </div>

            <button>Entrar</button>

            <div className="signup-link">

                <p>
                    Não tem uma conta? <a href="#">Registrar</a> 
                </p>

            </div>

        </form>

    </div>

  )

}

export default Login;
