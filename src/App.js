import logo from './Image_header.svg';
import Header from "./Components/Header.js";
import Meteo from "./Components/Meteo/Meteo.js";
import Api from "./Components/Meteo/Meteo_Ville.js";

import './Scss/Sass/Components/_header.scss';
import './Scss/Sass/Components/Desc.scss';
import './Scss/Sass/Components/Meteo.scss';


function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="header" />
      </header>
      <>
        <Header title="Bienvenue sur" game_title="Questions pour un Confiné !" desc="Vous voulez que votre temps passe plus vite ? Répondez à ce quizz !" />
        <Meteo ville="Paris" />
        <Api />
      </>
    </div>
  );
}

export default App;
