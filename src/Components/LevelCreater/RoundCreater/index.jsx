import React, {useState} from 'react';
import RoundTypeSelect from './RoundTypeSelect';

import './style.css';

export default function RoundCreater(props) {


    let questionHref = React.createRef();
    let answerHrefs = [];

    function addAnswer(e) {
        e.preventDefault();
        props.addAnswer(props.roundId);
    }

    function changeQuestion() {
        props.changeQuestion(props.roundId, questionHref.current.value);
    }
    function changeAnswer(answerId) {
        const text = answerHrefs[answerId].current.value.toLowerCase();
        props.changeAnswer(props.roundId, answerId, text);
    }

    return(
        <div className="create-round-wrapper">
            <RoundTypeSelect mode={props.mode} changeMode={props.changeMode} roundId={props.roundId}/>
            <input
                className='create-round__input'
                type="text"
                placeholder="Вопрос"
                value={props.question}
                onChange={changeQuestion}
                ref={questionHref}
            />
            {
                props.answer.map((answer,id) => {
                    answerHrefs.push(React.createRef());
                    return(
                            <input
                                className='create-round__input'
                                key={`${props.roundId}-${id}`}
                                type="text"
                                placeholder={`${(props.mode==="Select"&&id===0)?
                                    "Правильный ответ":
                                    (props.mode==="Select")?
                                        `Вариант ответа №${id+1}`:
                                        `Ответ №${id+1}`}`}
                                value={answer}
                                onChange={()=>changeAnswer(id)}
                                ref={answerHrefs[id]}
                                style={(props.mode==="Select"&&id===0)?{"background-color":"#9cffc8","color":"#3e3f3b"}:{}}
                            />
                        )
                })
            }
            <button className="create-round__add-btn" onClick={addAnswer}><i className="far fa-plus-square"></i></button>
        </div>
    );
}