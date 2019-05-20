import React, { useState }from 'react';

const useLevelCtreater = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rounds, setRounds] = useState([{
        id: 1,
        text: '',
        answer: ['']
    }]);

    const titleRef = React.createRef();
    const descriptionRef = React.createRef();

    const addRound = (e) => {
        e.preventDefault();
        setRounds(rounds.concat([{
            id: rounds.length+1,
            text: '',
            answer: ['']
        }]));
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

    const changer = {
        title: changeTitle,
        description: changeDescription,
        question: changeQuestion,
        answer: changeAnswer,
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

export { useLevelCtreater };