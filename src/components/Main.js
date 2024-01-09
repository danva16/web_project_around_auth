import React from "react";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

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
          card={card}
          onCardClick={props.onCardClick}
          onCardLike={props.onCardLike}
          onCardDelete={props.onCardDelete}
          />
        ))}
      </div>
      <ImagePopup
      selectedCardElement={props.selectedCardElement}
      onClose={props.handlerCloseAllPopups}
      />
    </main>
  );
}

export default Main;