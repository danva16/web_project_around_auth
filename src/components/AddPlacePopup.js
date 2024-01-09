import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name: nameRef.current.value,
      link: linkRef.current.value
    })
  }

  return(
    <PopupWithForm
    title="Nuevo Lugar"
    name="image"
    isOpen={props.isOpen}
    isClose={props.isClose}
    onSubmit={handleSubmit}
    >
      <div className="form__inputs">
        <input type="text" placeholder="Título" id="title-input" name="name" className="form__input" minlength="2" maxlength="30" ref={nameRef} required />
        <span className="form__input-error title-input-error"></span>
        <input type="url" placeholder="Enlace a la imagen" id="image-input" name="link" className="form__input" ref={linkRef} required />
        <span className="form__input-error image-input-error"></span>
      </div>
      <button id="submit-image" type="submit" className="button button_action_create">Crear</button>
    </PopupWithForm>
  )
}

export default AddPlacePopup;