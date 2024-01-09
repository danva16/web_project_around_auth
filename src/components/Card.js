import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  //subscripciones
  const currentUser = React.useContext(CurrentUserContext);
  //verificaciones de usuario
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div key={props.card._id} className="place">
      <img className="place__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="place__info">
        <h3 className="place__title">{props.card.name}</h3>
        <div className="like-elements">
          <button type="button" className={`button button_action_like ${isLiked && 'button_action_like--active'}`} onClick={handleLikeClick}></button>
          <span className="like-elements__count">{props.card.likes.length}</span>
        </div>
      </div>
      <button type="button" className={`button button_action_trash ${isOwn && 'button_action_trash-active'}`} onClick={handleDeleteClick}></button>
    </div>
  );
}

export default Card;