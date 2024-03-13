import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import * as auth from '../utils/auth';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

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
  };

  const handleCardLike = (card) => {
    const isliked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isliked)
    .then(newCard => {
      setCards(state => state.map(c => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
    .then(() => {
      setCards(state => state.filter(c => c._id !== card._id));
    })
    .catch(err => console.log(err));
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

  const handleAddPlaceSubmit = (newCardData) => {
    api.addCard(newCardData)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(err => {
      console.log(err);
    })
  }

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

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      auth.checkToken(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push('/protected');
        }
      })
      .catch(err => console.log(err));
    }

    return;
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    tokenCheck();
  };

  return (
    <BrowserRouter>
    <Switch>
      <ProtectedRoute path='/protected' loggedIn={loggedIn}>
        <CurrentUserContext.Provider value={currentUser}>
        <div className="body">
          <div className='page'>
            <Header />
            <Main
              onEditProfileClick={handleEditProfileClick}
              onEditAvatarClick={handleEditAvatarClick}
              onAddPlaceClick={handleAddPlaceClick}
              handlerCloseAllPopups={closeAllPopups}
              cards={cards}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              selectedCardElement={selectedCard}
            />
            <Footer />
            <div className="forms">
              <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateUser} />
              <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onSubmit={handleUpdateAvatar} />
              <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onSubmit={handleAddPlaceSubmit} />
            </div>
          </div>
          <div className={`overlay ${isOverlayVisible && 'overlay_mode_active'}`}></div>
        </div>
        </CurrentUserContext.Provider>
      </ProtectedRoute>

      <Route path='/login'>
        <Login handleLogin={handleLogin} />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>

      <Route>
        {loggedIn ? <Redirect to='/protected' /> : <Redirect to='/login' />}
      </Route>

    </Switch>
    </BrowserRouter>
  );
};

export default App;
