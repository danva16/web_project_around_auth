import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  //verificaciones de usuario
  const isOwn = props.owner._id === currentUser._id;
  const isLiked = props.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.cardElement);
  }

  return (
    <div key={props._id} className="place">
      <img className="place__image" src={props.link} alt={props.name} onClick={handleClick} />
      <div className="place__info">
        <h3 className="place__title">{props.name}</h3>
        <div className="like-elements">
          <button type="button" className={`button button_action_like ${isLiked && 'button_action_like-active'}`}></button>
          <span className="like-elements__count">{props.likes.length}</span>
        </div>
      </div>
      <button type="button" className={`button button_action_trash ${isOwn && 'button_action_trash-active'}`}></button>
    </div>
  );
}

export default Card;