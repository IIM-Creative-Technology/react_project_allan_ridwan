import React from 'react';
import '../Scss/Sass/Components/Questions.scss';

const Question = (props) => {
    return (
        <h1>{props.question}</h1>
    );
}

export default Question;