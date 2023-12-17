import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import api from './utils/api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userEmployment, setUserEmployment] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    document.querySelector(".overlay").classList.add("overlay_mode_active");
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    document.querySelector(".overlay").classList.add("overlay_mode_active");
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    document.querySelector(".overlay").classList.add("overlay_mode_active");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    document.querySelector(".overlay").classList.add("overlay_mode_active");
  }

  const closeAllPopups = () => {
    document.querySelector(".overlay").classList.remove("overlay_mode_active");
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
      <div className='overlay'></div>
    </div>
  );
}

export default App;
