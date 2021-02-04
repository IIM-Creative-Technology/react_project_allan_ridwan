import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <div>
            <h2>404</h2>
            <p>Ouuupsss... La page que vous recherchez est introuvable. </p>
            <Link to="/">Retour à la page principale.</Link>
        </div>
    )
}

export default Page404