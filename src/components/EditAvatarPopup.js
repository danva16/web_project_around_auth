import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      avatar: avatarRef.current.value
    });
  };

  return(
    <PopupWithForm
          title="Cambiar foto de perfil"
          name="avatar"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          >
            <div className="form__inputs">
              <input type="url" placeholder="Inserta imagen" id="avatar-input" name="avatar" className="form__input" ref={avatarRef} required />
              <span className="form__input-error avatar-input-error"></span>
            </div>
            <button id="submit-avatar" type="submit" className="button button_action_create">Guardar</button>
          </PopupWithForm>
  )
}

export default EditAvatarPopup;