import React from "react";
import "../../index.scss";
import resultImg from '../../assets/basketball.png'

function Result({ correct,questionsLen }) {
    return (
        <div className="result">
            <img src={resultImg} alt="result icon"/>
            <h2>Вы правильно ответили на {correct} из {questionsLen} вопросов</h2>
            <a href="/basketball-quiz">
                <button>Попробовать снова </button>
            </a>
        </div>
    );
}

export default Result;