import React from 'react';
import PropTypes from "prop-types";

import './style.css';

import LevelCard from "../LevelCard";

export default function LevelsList (props) {
    const getListElements = arr => (arr.map(elem => (
                <LevelCard
                    key={elem.id}
                    id={elem.id}
                    name={elem.name}
                    description={elem.description}
                    rounds={elem.rounds}
                    startLevel={props.startLevel}
                    deleteCard={props.deleteCard}
                />
                )));

    return (
        <ul className={"LevelsList"}>
            {getListElements(props.levels)}
        </ul>
    )
}

LevelsList.propTypes = {
    startLevel: PropTypes.func
};