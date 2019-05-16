import React, {Component} from "react";
import PropTypes from 'prop-types';

import "./style.css";
import { Transition ,TransitionGroup, CSSTransition } from "react-transition-group";

export default class RoundWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: "await", //--[true/false/await]--//
            buttonActive: false,
            exitMode: "RoundWindow",
            show: true
        };
    }

    componentDidMount() {
        this.setState({show:true});
    }

    roundClear = () => {
        this.setState({
            buttonActive: false
        });
        document.getElementsByClassName("RoundWindow__input")[0]
            .value = '';
    };

    checkAnswer = (e) => {
        e.preventDefault();
        let answer = this.getAnswer().value.replace(/\s{2,}/g, ' ').trim().toLowerCase();

        if (this.props.answer.find( (el) => (el === answer) )) {
            this.props.changeScore(1);
            this.setState({exitMode:"right-answer", show:false});

        } else {
            this.props.changeScore(-1);
            this.setState({exitMode:"fail-answer", show:false});

        }

        this.setState({show:false});
    };

    getAnswer = () => {
        return document.getElementsByClassName("RoundWindow__input")[0];
    };

    buttonActive = () => {
        if (this.getAnswer().value){
            this.setState({
                buttonActive: true
            })
        } else {
            this.setState({
                buttonActive: false
            })
        }
    };

    render() {
        console.log(this.props.answer);

        const text = this.props.text;
        const buttonText = (this.state.buttonActive)? "Проверить": "Пропустить";
        const buttonClassName = (this.state.buttonActive)?
            "RoundWindow__button RoundWindow__button_action":
            "RoundWindow__button";

        return (
            <Transition
                in={this.state.show}
                timeout={0}
                // unmountOnExit={true}
                onExited={
                    () => {
                        this.roundClear();
                        setTimeout(()=>{
                            this.setState({exitMode:"RoundWindow", show:true})
                            this.props.goNextRound(this.props.roundId);
                        },500);
                    }
                }
            >

                {(state) => {
                    const animationClassName = `${this.state.exitMode}-${state}`;

                    return (
                            <div className={`RoundWindow ${animationClassName}`}>
                                <p className={"RoundWindow__text"} >{text}</p>
                                <form action="#" onSubmit={this.checkAnswer}>
                                    <input
                                        type="text"
                                        className={"RoundWindow__input"}
                                        onChange={this.buttonActive}
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
};

RoundWindow.propTypes = {
    text: PropTypes.string,
    answer: PropTypes.array,
    roundId: PropTypes.number,
    goNextRound: PropTypes.func,
    changeScore: PropTypes.func
};