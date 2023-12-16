import React from "react";

function Form() {
  return (
    <form className="form" novalidate>
      <fieldset id="profile" className="form__set">
        <button type="button" className="button button_action_close"></button>
        <h2 className="form__title">Editar Perfil</h2>
        <div className="form__inputs">
          <input type="text" placeholder="Nombre" id="name-input" name="name" className="form__input" minlength="2" maxlength="40" required />
          <span className="form__input-error name-input-error"></span>
          <input type="text" placeholder="Acerca de mí" id="employment-input" name="about" className="form__input" minlength="2" maxlength="200" required />
          <span className="form__input-error employment-input-error"></span>
        </div>
        <button id="submit-profile" type="submit" className="button button_action_create">Guardar</button>
      </fieldset>

      <fieldset id="image" className="form__set">
        <button type="button" className="button button_action_close"></button>
        <h2 className="form__title">Nuevo Lugar</h2>
        <div className="form__inputs">
          <input type="text" placeholder="Título" id="title-input" name="name" className="form__input" minlength="2" maxlength="30" required />
          <span className="form__input-error title-input-error"></span>
          <input type="url" placeholder="Enlace a la imagen" id="image-input" name="link" className="form__input" required />
          <span className="form__input-error image-input-error"></span>
        </div>
        <button id="submit-image" type="submit" className="button button_action_create">Crear</button>
      </fieldset>

      <fieldset id="avatar" className="form__set form__set_type_avatar">
        <button type="button" className="button button_action_close"></button>
        <h2 className="form__title">Cambiar foto de perfil</h2>
        <div className="form__inputs">
          <input type="url" placeholder="Inserta imagen" id="avatar-input" name="avatar" className="form__input" required />
          <span className="form__input-error avatar-input-error"></span>
        </div>
        <button id="submit-avatar" type="submit" className="button button_action_create">Guardar</button>
      </fieldset>
    </form>
    );
}

export default Form;