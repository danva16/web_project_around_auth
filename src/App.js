import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

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

  const closeAllPopups = () => {
    document.querySelector(".overlay").classList.remove("overlay_mode_active");
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
  };

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
        />
        <Footer />
      </div>
      <div className='overlay'></div>
    </div>
  );
}

export default App;
