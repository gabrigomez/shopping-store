import React, { useState } from 'react';
import './LoginScreen.css'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (

        <div className="logIn">
            <form>
                <div className="loginField">
                    Login
                </div>
                <div className="fields">
                    <label htmlFor="email">E-mail  </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Digite seu e-mail"
                        required
                        onChange={(e) => setEmail(e.target.value)} >
                    </input>
                </div>
                <div className="fields">
                    <label htmlFor="password">Senha  </label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Digite sua senha"
                        required
                        onChange={(e) => setEmail(e.target.value)} >
                    </input>
                </div>
            </form>
            <button className="button">
                Entrar
            </button>
        </div>

    );
};

export default Login;