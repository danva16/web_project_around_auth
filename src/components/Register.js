import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

import succesImage from "../images/modal_correct_image.svg";
import failImage from "../images/modal_wrong_image.svg";
import headerLogo from "../images/header__logo.svg";

import * as auth from "../utils/auth";
import InfoToolTip from "./InfoToolTip";

function Register() {
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [succesToolTipIsOpened, setSuccesToolTipIsOpened] = React.useState(false);
  const [failureToolTipIsOpened, setFailureToolTipIsOpened] = React.useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  function handleToolTipClose() {
    setSuccesToolTipIsOpened(false);
    setFailureToolTipIsOpened(false);
  };

  function handleRegistrationSucces() {
    setSuccesToolTipIsOpened(true);
  };

  function handleRegistrationFailure() {
    setFailureToolTipIsOpened(true);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = formData;

    auth.register(email, password)
    .then((res) => {
      if (res) {
        handleRegistrationSucces();
        history.push("/login");
      }

      handleRegistrationFailure();
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="login-page">
      <section className="login-header">
          <img src={headerLogo} alt="Logotipo Around US" className="login-header__image" />
          <Link to="/login" className="login-header__link">Iniciar sesión</Link>
      </section>

      <section className="login-info">
        <h1 className="login-info__title">Regístrate</h1>
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
            <button className="button button_action_create">Regístrate</button>
            <Link to="/login" className="login-submit__link">
              ¿Ya eres miembro? Inicia sesión aquí
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default withRouter(Register);