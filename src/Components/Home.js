import logo from '../assets/Image_header.png';
import Footer from './Footer';
import Header from "./Header";
import Meteo from "./Meteo/Meteo";
import Api from "./Meteo/Meteo_Ville";
import CardExampleCard from "./Cards";
import BlockTitle from "./Title_Block_Cards";

function Home() {
    return (
        <div className="App">
      <section>
        <img src={logo} className="App-logo" alt="header" />
      </section>
      <>
        <Header title="Bienvenue sur" game_title="Questions pour un Confiné !" desc="Vous voulez que votre temps passe plus vite ? Répondez à ce quizz !" />
        <Meteo ville="Paris" />
        <Api />
        <BlockTitle/>
        <CardExampleCard />
        <Footer/>
      </>
    </div>
    );
}

export default Home