import Julien from "../assets/JulienLepers.gif";
import '../Scss/Sass/Components/Desc.scss';

const Header = ({title, desc, game_title}) => {
    return(
        <div className="App-desc">
            <h1>{title}</h1>
            <h2 className="App_game_title">{game_title}</h2>
            <p className="App_rep_quizz">{desc}</p>
            <img src={Julien} className="App-gif" alt="GIF Julien Lepers" />
        </div>
    )
}

export default Header