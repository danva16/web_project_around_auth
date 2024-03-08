import React from "react";
import { Link, withRouter } from 'react-router-dom';
import * as auth from '../utils/auth';
import headerLogo from '../images/header__logo.svg';

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      return;
    }

    auth.authorize(email, password)
    .then((data) => {
      if (data.jwt) {
        setFormData({
          email: "",
          password: "",
        });

        handleLogin(evt);
      }
    })
    .catch((err) => console.log(err))
  };

  return (
    <div className="login-page">
      <section className="login-header">
          <img src={headerLogo} alt="Logotipo Around US" className="login-header__image" />
          <Link to="/register" className="login-header__link">Regístrate</Link>
      </section>

      <section className="login-info">
        <h1 className="login-info__title">Inicia sesión</h1>
        <form className="login-info__form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            id="email-input"
            placeholder="Correo electrónico"
            className="login-info__input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
          name="password"
          type="password"
          id="password-input"
          placeholder="Contraseña"
          className="login-info__input"
          value={formData.password}
          onChange={handleChange}
          required
          />

          <div className="login-submit">
            <button className="button button_action_create">Inicia sesión</button>
            <Link to="/register" className="login-submit__link">
              ¿Aún no eres miembro? Registrate aquí
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default withRouter(Login);
