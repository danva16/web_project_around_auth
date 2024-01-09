import React from "react";
import api from "../utils/api";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CurrentCardsContext from "../contexts/CurrentCardsContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const handleSetCards = React.useContext(CurrentCardsContext);

  function handleCardLike(card) {
    const isliked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isliked)
    .then(newCard => {
      handleSetCards(state => state.map(c => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      handleSetCards(state => state.filter(c => c._id !== card._id));
    })
    .catch(err => console.log(err));
  }

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
          onCardClick={props.handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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