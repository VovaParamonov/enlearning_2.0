import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import LevelHeader from "../../LevelHeader";
import RoundWindow from "../../RoundWindow";

import { usePageLevel } from '../../../hooks'

export default function PageLevel (props) {

    const [
        score, round,
        goNextRound,
        changeScore
    ] = usePageLevel(props);


    return (
        <div className={"PageLevel"}>
            <LevelHeader levelName={props.name} score={score}/>

            <RoundWindow
                text={round.text}
                answer={round.answer}
                roundId={round.id}
                goNextRound={goNextRound}
                changeScore={changeScore}
                mode={round.mode}
            />

        </div>
    )


}


// export default class PageLevel extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             roundSelected: 1,
//             roundsCompleted: [],
//             score: 0,
//             err: 0,
//             right: 0,
//             startTime: new Date()
//         }
//     }
//
//     goNextRound = (selectedNow) => {
//         if (this.state.roundsCompleted.length === this.props.rounds.length-2) {
//             this.setState({roundsCompleted: []});
//         }
//
//         let nextRoundId = randomInteger(1, this.props.rounds.length);
//         while(this.state.roundsCompleted.indexOf(nextRoundId) !== -1 || nextRoundId === selectedNow){
//             nextRoundId = randomInteger(1, this.props.rounds.length)
//         }
//
//         this.setState((oldState)=>{
//             return {
//                 roundSelected: nextRoundId,
//                 roundsCompleted: oldState.roundsCompleted.concat(selectedNow)
//             }
//         });
//         console.log(this.state.roundsCompleted);
//     };
//
//     changeScore = (changes) => {
//         (changes > 0)?
//             this.setState(oldState=>({right:oldState.right+1})):
//             this.setState(oldState=>({err:oldState.err+1}));
//
//         if (changes < 0){
//             if (this.state.score === 0) {
//                 return
//             }
//         } else if (this.state.score >= 9) {
//             setTimeout(this.exitLevel, 1000);
//         }
//
//         this.setState((state) => {
//             return{score: state.score + changes}
//         });
//     };
//
//     exitLevel = () => {
//         const date = new Date();
//         setCookie('lastStatistic', JSON.stringify(
//             {
//                 levelName: this.props.name,
//                 error: this.state.err,
//                 right: this.state.right,
//                 speed: (date - this.state.startTime) / 1000,
//                 completed: `${date.getMonth()+1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
//             }
//         ));
//         this.props.endLevel();
//     };
//
//     render() {
//         const score = this.state.score;
//         let round = this.props.rounds.find((round) => (
//             round.id === this.state.roundSelected)
//         );
//         const roundText = round.text;
//         const roundAnswer = round.answer;
//         const roundId = round.id;
//
//         return (
//             <div className={"PageLevel"}>
//                 <LevelHeader levelName={this.props.name} score={score}/>
//
//                 <RoundWindow
//                     text={roundText}
//                     answer={roundAnswer}
//                     roundId={roundId}
//                     goNextRound={this.goNextRound}
//                     changeScore={this.changeScore}
//                 />
//
//             </div>
//         )
//     }
// }

PageLevel.propTypes = {
    name: PropTypes.string,
    rounds: PropTypes.array,
    goPage: PropTypes.func
};