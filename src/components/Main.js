import React from "react";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__image" src="#" alt="Imagen de perfil del retrato de usuario" />
        <div className="profile__photo-overlay">
          <button type="button" className="button button_type_photo"></button>
        </div>
        <div className="profile__data">
          <h2 className="profile__username">Username</h2>
          <button type="button" className="button button_action_edit"></button>
          <p className="profile__useremployment"></p>
        </div>
        <button type="submit" className="button button_action_add"></button>
      </section>

      <div className="places">
        <template id="place-template">
          <div className="place">
            <img className="place__image" src="#" alt="" />
            <div className="place__info">
              <h3 className="place__title">Título</h3>
              <div className="like-elements">
                <button type="button" className="button button_action_like"></button>
                <span className="like-elements__count">0</span>
              </div>
            </div>
            <button type="button" className="button button_action_trash"></button>
          </div>
        </template>
      </div>
    </main>
  );
}

export default Main;