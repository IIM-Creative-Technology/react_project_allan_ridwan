import React from 'react';
import '../../Scss/Sass/Components/Quizz/Questions.scss';

const Question = (props) => {
    return (
        <h3>{props.question}</h3>
    );
}

export default Question;