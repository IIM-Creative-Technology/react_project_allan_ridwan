import React from 'react';
import { Link } from 'react-router-dom';
import "../Scss/Sass/Components/Error404.scss";


function Page404() {
    return (
        <div className="Block_error">
            <h1 className="Titre_404">404</h1>
            <p className="Text_404">Ouuupsss... Mauvaise réponse ! La page que vous recherchez est introuvable. </p>
            <Link to="/">Retour à la page principale</Link>
        </div>
    )
}

export default Page404