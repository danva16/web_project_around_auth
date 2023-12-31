import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import api from './utils/api';
import CurrentUserContext from './contexts/CurrentUserContext';
import CurrentCardsContext from './contexts/CurrentCardsContext';

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
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <CurrentCardsContext.Provider value={setCards}>
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
            cards={cards}
            handleCardClick={handleCardClick}
            selectedCardElement={selectedCard}
            />
          <Footer />
        </div>
        <div className={`overlay ${isOverlayVisible && 'overlay_mode_active'}`}></div>
      </div>
    </CurrentCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
