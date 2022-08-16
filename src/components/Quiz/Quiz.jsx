import React from "react";
import "../../index.scss";


function Quiz({ question, onClickVariant, step, questionsLen }) {
    const percent = Math.round(step / questionsLen * 100);

    return (
        <div>
            <div className="progress">
                <div style={{ width: `${percent}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text,index) => <li key={text} onClick={() => onClickVariant(index)}>{text}</li>)}
            </ul>
        </div>
    );
}

export default Quiz;