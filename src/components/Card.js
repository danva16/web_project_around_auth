import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.cardElement);
  }

  return (
    <div key={props._id} className="place" onClick={handleClick}>
      <img className="place__image" src={props.link} alt={props.name} />
      <div className="place__info">
        <h3 className="place__title">{props.name}</h3>
        <div className="like-elements">
          <button type="button" className="button button_action_like"></button>
          <span className="like-elements__count">{props.likes.length}</span>
        </div>
      </div>
      <button type="button" className="button button_action_trash"></button>
    </div>
  );
}

export default Card;