import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function LevelCard (props){
    const deleteSelf = () => {
        props.deleteCard(props.id)
    };

    const startLevel = (e) => {
        if(e.target.className === "fas fa-trash-alt delete-icon"){ // fix
            return deleteSelf();
        }
        console.log(props.rounds);
        props.startLevel({
            name: props.name,
            rounds: props.rounds
        });
    };

    return (
        <li className={"LevelCard"} onClick={startLevel}>
            <div className='LevelCard__play'>
                <i className="fas fa-play"></i>
            </div>
            <h2 className={"LevelCard__name"}>{props.name}</h2>
            <p className={"LevelCard__description"}>{props.description}</p>
            <i
                className="fas fa-trash-alt delete-icon"
                onClick={deleteSelf}
            />
        </li>
    )
}

LevelCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    rounds: PropTypes.array,
    startLevel: PropTypes.func,
    id: PropTypes.number,
    deleteCard: PropTypes.func
};
