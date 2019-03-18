import React,{ useState } from 'react';

import './style.css';

export default function RoundCreater(props) {
    //const [answers, setAnswers] = useState(['']);

    function answerHandle(text, answerId) {
        //setAnswers(answers.map((answer,id)=>{return (id===answerId)? text: answer}))
    }

    function addAnswer(e) {
        e.preventDefault();
        props.addAnswer(props.roundId);
    }

    function changeAnswer(answerId) {
        const text = document.getElementById(`input-answer-${props.roundId}-${answerId}`).value;
        props.changeAnswer(props.roundId, answerId, text);
    }

    return(
        <div className="create-round-wrapper">
            <input
                type="text"
                className="create-round__question-input"
                placeholder="Вопрос"
                defaultValue={props.question}
            />
            {
                props.answer.map((answer,id) => {
                    return(
                            <input
                                key={id}
                                id={`input-answer-${props.roundId}-${id}`}
                                type="text"
                                className="create-round__answer-input"
                                placeholder={`Ответ №${id+1}`}
                                defaultValue={answer}
                                data-answer-id={id}
                                onBlur={e => {e.preventDefault();changeAnswer(id)}}
                            />
                        )
                })
            }
            <button className="create-window__add-answer-button" onClick={addAnswer}><i className="far fa-plus-square"></i></button>
        </div>
    );
}