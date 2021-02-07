import React, { useState, useEffect } from 'react';
import '../Scss/Sass/Components/APropos.scss';

function Like() {
  const [count, setCount] = useState(0);  

  useEffect(() => {

  document.title = `Vous avez cliqué ${count} fois`;  });
  
  return (
    <div className="container">
    <h2>À propos</h2>
        <p>Ce site a été réalisé par Ridwan SOOCOORMANEE et Allan GERME.</p>
        <p>Nous espérons que ce site vous a plu et nous aimerions avoir votre avis en déposant un "Like" ! </p>
        <button className="like" onClick={() => setCount(count + 1)}>
        J'aime 
      </button>
      <p>Vous êtes {count} à aimer notre site ! Merci à tous !</p>
    </div>
  );
}

export default Like;