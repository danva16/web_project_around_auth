import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import api from './utils/api';
import CurrentUserContext from './contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userEmployment, setUserEmployment] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(currentValue => !currentValue);
    setIsOverlayVisible(currentValue => !currentValue);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(currentValue => !currentValue);
    setIsOverlayVisible(currentValue => !currentValue);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(currentValue => !currentValue);
    setIsOverlayVisible(currentValue => !currentValue);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsOverlayVisible(currentValue => !currentValue);
  }

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
      setUserName(data.name);
      setUserEmployment(data.about);
      setUserAvatar(data.avatar);
      setCurrentUser(data);
    })
    .catch(err => {
      console.log(err);
    });

    api.getInitialCards()
    .then(cardsData => {
      setCards(cardsData);
    })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
      <div className='page'>
        <Header />
        <Main
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        onEditProfileClick={handleEditProfileClick}
        onEditAvatarClick={handleEditAvatarClick}
        onAddPlaceClick={handleAddPlaceClick}
        handlerCloseAllPopups={closeAllPopups}
        userDataName={userName}
        userDataEmployment={userEmployment}
        userDataAvatar={userAvatar}
        cards={cards}
        handleCardClick={handleCardClick}
        selectedCardElement={selectedCard}
        />
        <Footer />
      </div>
      <div className={`overlay ${isOverlayVisible && 'overlay_mode_active'}`}></div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
