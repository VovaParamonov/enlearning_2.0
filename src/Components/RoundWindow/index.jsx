import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import "./style.css";
import { Transition } from "react-transition-group";

export default function RoundWindow (props) {
    const [buttonActive, setButtonActive] = useState(false);
    const [exitMode, setExitMode] = useState("RoundWindow"); // mod of view round window
    const [show, setShow] = useState(true);

    const roundInput = React.createRef();

    useEffect(()=>{
        setShow(true);
    }, []);

    const roundClear = () => {
        setButtonActive(false);
        roundInput.current.value = '';
    };

    const checkAnswer = (e) => {
        e.preventDefault();
        let answer = getAnswer().value.replace(/\s{2,}/g, ' ').trim().toLowerCase();

        if (props.answer.find( (el) => (el === answer) )) {
            props.changeScore(1);

            setExitMode("right-answer");
        } else {
            props.changeScore(-1);
            setExitMode("fail-answer");
        }

        setShow(false);
    };

    const getAnswer = () => {
        return document.getElementsByClassName("RoundWindow__input")[0];
    };

    const buttonActivate = () => {
        if (getAnswer().value){
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
    };

    const text = props.text;
    const buttonText = buttonActive? "Проверить": "Пропустить";
    const buttonClassName = buttonActive?
        "RoundWindow__button RoundWindow__button_action":
        "RoundWindow__button";

    return (
        <Transition
            in={show}
            timeout={0}
            onExited={
                () => {
                    roundClear();
                    setTimeout(()=>{
                        setExitMode("RoundWindow");
                        setShow(true);
                        props.goNextRound(props.roundId);
                    },500);
                }
            }
        >
            {(state) => {
                const animationClassName = `${exitMode}-${state}`;

                return (
                    <div className={`RoundWindow ${animationClassName}`}>
                        <p className={`RoundWindow__text`} >{`${text}`}</p>
                        <form action="#" onSubmit={checkAnswer}>
                            <input
                                type="text"
                                className={"RoundWindow__input"}
                                onChange={buttonActivate}
                                ref={roundInput}
                            />
                            <input
                                type="submit"
                                value={buttonText}
                                className={buttonClassName}
                            />
                        </form>
                    </div>
                )
            }}
        </Transition>
    )
}

RoundWindow.propTypes = {
    text: PropTypes.string,
    answer: PropTypes.array,
    roundId: PropTypes.number,
    goNextRound: PropTypes.func,
    changeScore: PropTypes.func
};