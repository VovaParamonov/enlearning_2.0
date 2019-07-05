import React, { useState }from 'react';
import {randomInteger, setCookie} from "./funcs";

class Round {
    constructor(newId, newText, newAnswer, newMode) {
        this.id = newId || this.id;
        this.text = newText || this.text;
        this.answer = newAnswer || this.answer;
        this.mode = newMode || this.mode
    }
    id = 1;
    text ='';
    answer = [''];
    mode = "Write";
}

const useLevelCtreater = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rounds, setRounds] = useState([new Round()]);

    const titleRef = React.createRef();
    const descriptionRef = React.createRef();

    const addRound = (e) => {
        e.preventDefault();
        setRounds(rounds.concat([new Round(rounds.length+1)]));
    };

    const addAnswer = (roundId) => {
        setRounds(rounds.map((round,id) => {
            if (id === roundId){
                round.answer.push('');
            }
            return round
        }));
    };

    const changeTitle = () => {
        setTitle(titleRef.current.value);
    };

    const changeDescription = () => {
        setDescription(descriptionRef.current.value);
    };

    const changeQuestion = (roundId, text) => {
        setRounds(rounds.map((round,rId) => {
            if (rId === roundId) {
                round.text = text
            }
            return round;
        }));
    };

    const changeAnswer = (roundId, answerId, text) => {
        let newRounds = rounds.slice();

        newRounds = newRounds.map((round,rId) => {
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

        setRounds(newRounds.slice());
    };

    const changeMode = (roundId, newMode) => {
        setRounds(rounds.map((round, rId) => {
            if (rId === roundId) {
                round.mode = newMode;
            }

            return round;
        }));
    };

    const changer = {
        title: changeTitle,
        description: changeDescription,
        question: changeQuestion,
        answer: changeAnswer,
        mode: changeMode
    };

    const addater = {
        round: addRound,
        answer: addAnswer
    };

    const create = (e) => {
        e.preventDefault();
        if (rounds.length <= 2)
            return alert('В уровне должно быть больше двух раундов');
        let newLevel = {
            id: 'none',
            name: title || 'MyLevel',
            description: description,
            rounds: rounds
        };
        props.addLevel(newLevel);
    };

    return [
        title, description, rounds,
        addater,
        changer,
        create,
        titleRef, descriptionRef
    ]
};

const usePageLevel = (props) => {
    const [roundSelected, setRoundSelected] = useState(1);
    const [roundsCompleted, setRoundsCompleted] = useState([]);
    const [score, setScore] = useState(0);
    const [err, setErr] = useState(0);
    const [right, setRight] = useState(0);
    const [startTime] = useState(new Date());

    const goNextRound =(selectedNow) => {
        let nextRoundId = randomInteger(1, props.rounds.length);
        while(roundsCompleted.indexOf(nextRoundId) !== -1 || nextRoundId === selectedNow){
            nextRoundId = randomInteger(1, props.rounds.length)
        }

        setRoundSelected(nextRoundId);

        if (roundsCompleted.length === props.rounds.length-2){
            setRoundsCompleted([selectedNow]);
        } else {
            setRoundsCompleted(roundsCompleted.concat(selectedNow));
        }
    };

    const changeScore = (changes) => {
        (changes > 0)?
            setRight(right+1):
            setErr(err+1);

        console.log(right);

        if (changes < 0){
            if (score === 0) {
                return
            }
        } else if (score >= 9) {
            setTimeout(exitLevel, 1000);
        }

        setScore(score+changes);
    };

    const exitLevel = () => {
        const date = new Date();
        setCookie('lastStatistic', JSON.stringify(
            {
                levelName: props.name,
                error: err,
                right: right+1,
                speed: (date - startTime) / 1000,
                completed: `${date.getMonth()+1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
            }
        ));
        props.endLevel();
    };

    let round = props.rounds.find((round) => (
        round.id === roundSelected)
    );

    return [
        score, round,
        goNextRound,
        changeScore
    ]
};

export { useLevelCtreater, usePageLevel };