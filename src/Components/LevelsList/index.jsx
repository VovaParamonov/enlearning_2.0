import React, {Component} from 'react';
import PropTypes from "prop-types";

import defaultLevels from "../../defaultLevels";

import './style.css';

import LevelCard from "../LevelCard";

const levels = defaultLevels;

export default class LevelsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            levels: levels
        }
    }

    deleteCard = (cardId) => {
        this.setState(oldState => {
            return {levels: oldState.levels.filter(elem => elem.id !== cardId)}
        })
    };


    getListElements = (arr) => {
        return arr.map(elem => (
                <LevelCard
                    key={elem.id}
                    id={elem.id}
                    name={elem.name}
                    description={elem.description}
                    rounds={elem.rounds}
                    startLevel={this.props.startLevel}
                    deleteCard={this.deleteCard}
                />
            ));
    };

    render() {
        return (
            <li className={"LevelsList"}>
                {this.getListElements(this.state.levels)}
            </li>
        )
    }
}

LevelsList.propTypes = {
    startLevel: PropTypes.func
};