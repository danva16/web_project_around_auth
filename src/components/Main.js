import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__image" src={currentUser.avatar} alt="Imagen de perfil del retrato de usuario" />
        <div className="profile__photo-overlay">
          <button type="button" className="button button_type_photo" onClick={props.onEditAvatarClick}></button>
        </div>
        <div className="profile__data">
          <h2 className="profile__username">{currentUser.name}</h2>
          <button type="button" className="button button_action_edit" onClick={props.onEditProfileClick}></button>
          <p className="profile__useremployment">{currentUser.about}</p>
        </div>
        <button type="submit" className="button button_action_add" onClick={props.onAddPlaceClick}></button>
      </section>

      <div className="places">
        {props.cards.map((card) => (
          <Card
          name={card.name}
          link={card.link}
          likes={card.likes}
          _id={card._id}
          cardElement={card}
          onCardClick={props.handleCardClick}
          />
        ))}
      </div>

      <form className="form" noValidate>
        <PopupWithForm
        title="Editar Perfil"
        name="profile"
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.handlerCloseAllPopups}
        >
          <div className="form__inputs">
            <input type="text" placeholder="Nombre" id="name-input" name="name" className="form__input" minlength="2" maxlength="40" required />
            <span className="form__input-error name-input-error"></span>
            <input type="text" placeholder="Acerca de mí" id="employment-input" name="about" className="form__input" minlength="2" maxlength="200" required />
            <span className="form__input-error employment-input-error"></span>
          </div>
          <button id="submit-profile" type="submit" className="button button_action_create">Guardar</button>
        </PopupWithForm>
        <PopupWithForm
        title="Nuevo Lugar"
        name="image"
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.handlerCloseAllPopups}
        >
          <div className="form__inputs">
            <input type="text" placeholder="Título" id="title-input" name="name" className="form__input" minlength="2" maxlength="30" required />
            <span className="form__input-error title-input-error"></span>
            <input type="url" placeholder="Enlace a la imagen" id="image-input" name="link" className="form__input" required />
            <span className="form__input-error image-input-error"></span>
          </div>
          <button id="submit-image" type="submit" className="button button_action_create">Crear</button>
        </PopupWithForm>
        <PopupWithForm
        title="Cambiar foto de perfil"
        name="avatar"
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.handlerCloseAllPopups}
        >
          <div className="form__inputs">
            <input type="url" placeholder="Inserta imagen" id="avatar-input" name="avatar" className="form__input" required />
            <span className="form__input-error avatar-input-error"></span>
          </div>
          <button id="submit-avatar" type="submit" className="button button_action_create">Guardar</button>
        </PopupWithForm>
      </form>
      <ImagePopup
      selectedCardElement={props.selectedCardElement}
      onClose={props.handlerCloseAllPopups}
      />
    </main>
  );
}

export default Main;