import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [employment, setEmployment] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmployment(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmploymentChange = (e) => {
    setEmployment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name,
      about:employment
    });
  };

  return (
    <PopupWithForm
    title="Editar Perfil"
    name="profile"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    >
      <div className="form__inputs">
        <input type="text" placeholder="Nombre" id="name-input" name="name" className="form__input" minlength="2" maxlength="40"
        value={name} onChange={handleNameChange} required />
        <span className="form__input-error name-input-error"></span>
        <input type="text" placeholder="Acerca de mí" id="employment-input" name="about" className="form__input" minlength="2" maxlength="200"
        value={employment} onChange={handleEmploymentChange} required />
        <span className="form__input-error employment-input-error"></span>
      </div>
      <button id="submit-profile" type="submit" className="button button_action_create">Guardar</button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;