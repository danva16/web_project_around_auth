import logo from './images/header__logo.svg';

function App() {
  return (
    <div className="body">
      <div className="page">
        <header className="header">
          <img className="header__logo" src={logo} alt="Texto que colocaremos en el header que será 'About The US'" />
        </header>

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

        <footer className="footer">
          <p className="footer__copyright">&copy; 2023. Daniel Adan Nava Briseño</p>
        </footer>

        <div className="popup">
          <img className="popup__image" src="#" alt="Coloca el URL de la imagen que deseas agregar" />
          <h2 className="popup__title">Lugar</h2>
          <button type="button" className="button button_action_close"></button>
        </div>

        <div id="confirmation" className="popup popup_type_confirmation">
          <h2 className="popup__title popup__title_type_confirmation">¿Estás seguro?</h2>
          <button type="button" className="button button_action_create">Sí</button>
          <button type="button" className="button button_action_close"></button>
        </div>
      </div>

      <form className="form" novalidate>
        <fieldset id="profile" className="form__set">
          <button type="button" className="button button_action_close"></button>
          <h2 className="form__title">Editar Perfil</h2>
          <div className="form__inputs">
            <input type="text" placeholder="Nombre" id="name-input" name="name" className="form__input" minlength="2" maxlength="40" required />
            <span className="form__input-error name-input-error"></span>
            <input type="text" placeholder="Acerca de mí" id="employment-input" name="about" className="form__input" minlength="2" maxlength="200" required />
            <span className="form__input-error employment-input-error"></span>
          </div>
          <button id="submit-profile" type="submit" className="button button_action_create">Guardar</button>
        </fieldset>

        <fieldset id="image" className="form__set">
          <button type="button" className="button button_action_close"></button>
          <h2 className="form__title">Nuevo Lugar</h2>
          <div className="form__inputs">
            <input type="text" placeholder="Título" id="title-input" name="name" className="form__input" minlength="2" maxlength="30" required />
            <span className="form__input-error title-input-error"></span>
            <input type="url" placeholder="Enlace a la imagen" id="image-input" name="link" className="form__input" required />
            <span className="form__input-error image-input-error"></span>
          </div>
          <button id="submit-image" type="submit" className="button button_action_create">Crear</button>
        </fieldset>

        <fieldset id="avatar" className="form__set form__set_type_avatar">
          <button type="button" className="button button_action_close"></button>
          <h2 className="form__title">Cambiar foto de perfil</h2>
          <div className="form__inputs">
            <input type="url" placeholder="Inserta imagen" id="avatar-input" name="avatar" className="form__input" required />
            <span className="form__input-error avatar-input-error"></span>
          </div>
          <button id="submit-avatar" type="submit" className="button button_action_create">Guardar</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
