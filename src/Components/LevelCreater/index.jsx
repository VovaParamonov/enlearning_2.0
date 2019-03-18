import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RoundCreater from "./RoundCreater";

import './style.css';

export default class LevelCreater extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rounds: [
                {
                    id: 1,
                    text: '',
                    answer: ['']
                }
            ]
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(nextState.rounds)
    }

    addRound = (e) => {
        e.preventDefault();
        this.setState(oldState => {
            return {
                rounds: oldState.rounds.concat([{
                    id: oldState.rounds.length,
                    text: '',
                    answer: ['']
                }])
            }
        })
    };

    addAnswer = (roundId) => {
        this.setState(oldState => {
            return {
                rounds: oldState.rounds.map((round,id) => {
                    if (id === roundId){
                        round.answer.push('');
                    }
                    return round
                })
            }
        })
    };

    changeAnswer = (roundId, answerId, text) => {
        this.setState(oldState => {
            let newRounds = oldState.rounds.slice();

            newRounds.rounds = newRounds.rounds.map((round,rId) => {
                if (rId === roundId) {
                    round.answer = round.answer.map((ans, ansId) => {
                        if (ansId === answerId) {
                            return text;
                        } else {
                            return ans;
                        }
                    });
                }
                return round;
            });

            return {
                rounds: newRounds.slice()
            }
        })
    };

    create = (e) => {
        e.preventDefault();
        // const finalLevel=this.state.rounds.map((round,rId) => {
        //     round.answer.map((ans, ansId) => {
        //         return document.getElementById(`input-answer-${rId}-${ansId}`).value
        //     });
        //
        //     return round;
        // });
        console.log(this.state.rounds);
    };

    render() {
        return (
            <div className="create-window">
                <form action="#" className="create-form">
                    {
                        this.state.rounds.map((round,id) => {
                            return (
                                <RoundCreater
                                    key={id}
                                    roundId={id}
                                    question={round.text}
                                    answer={round.answer}
                                    addAnswer={this.addAnswer}
                                    changeAnswer={this.changeAnswer}
                                />
                            )
                        })
                    }
                </form>
                <button className="create-window__add-round-button" onClick={this.addRound}><i className="far fa-plus-square"></i></button>
                <button className="create-window__create-button" onClick={this.create}>Создать</button>
            </div>
        )
    }

}