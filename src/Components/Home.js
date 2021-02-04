import logo from '../Image_header.svg';
import Header from "./Header";
import Meteo from "./Meteo/Meteo";
import Api from "./Meteo/Meteo_Ville";

function Home() {
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

export default Home