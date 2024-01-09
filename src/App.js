import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';
import Footer from './components/Footer';
import api from './utils/api';
import CurrentUserContext from './contexts/CurrentUserContext';
import CurrentCardsContext from './contexts/CurrentCardsContext';
import EditProfilePopup from './components/EditProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(currentValue => !currentValue);
    console.log("Profile");
    setIsOverlayVisible(currentValue => !currentValue);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(currentValue => !currentValue);
    console.log("Avatar");
    setIsOverlayVisible(currentValue => !currentValue);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(currentValue => !currentValue);
    console.log("Place");
    setIsOverlayVisible(currentValue => !currentValue);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsOverlayVisible(currentValue => !currentValue);
  };

  const handleUpdateUser = (newUserData) => {
    api.updateUserInfo(newUserData)
    .then(updatedUser => {
      setCurrentUser(updatedUser);
      closeAllPopups();
    })
    .catch(err => {
      console.log(err);
    })
  };

  const handleUpdateAvatar = (newAvatarData) => {
    api.updateProfilePhoto(newAvatarData)
    .then(updatedUser => {
      setCurrentUser(updatedUser);
      closeAllPopups();
    })
    .catch(err => {
      console.log(err);
    })
  };

  const closeAllPopups = () => {
    setIsOverlayVisible(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  };

  React.useEffect(() => {
    api.getUserData()
    .then(data => {
      setCurrentUser(data);
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });

    api.getInitialCards()
    .then(cardsData => {
      setCards(cardsData);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <CurrentCardsContext.Provider value={setCards}>
      <div className="body">
        <div className='page'>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onEditAvatarClick={handleEditAvatarClick}
            onAddPlaceClick={handleAddPlaceClick}
            handlerCloseAllPopups={closeAllPopups}
            cards={cards}
            handleCardClick={handleCardClick}
            selectedCardElement={selectedCard}
          />
          <Footer />
          <div className="forms">
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateAvatar} />
          <PopupWithForm
          title="Nuevo Lugar"
          name="image"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          >
            <div className="form__inputs">
              <input type="text" placeholder="Título" id="title-input" name="name" className="form__input" minlength="2" maxlength="30" required />
              <span className="form__input-error title-input-error"></span>
              <input type="url" placeholder="Enlace a la imagen" id="image-input" name="link" className="form__input" required />
              <span className="form__input-error image-input-error"></span>
            </div>
            <button id="submit-image" type="submit" className="button button_action_create">Crear</button>
          </PopupWithForm>
          </div>
        </div>
        <div className={`overlay ${isOverlayVisible && 'overlay_mode_active'}`}></div>
      </div>
    </CurrentCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
