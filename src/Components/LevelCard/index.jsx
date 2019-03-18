import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class LevelCard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    deleteSelf = () => {
        this.props.deleteCard(this.props.id)
    };

    startLevel = (e) => {
        if(e.target.className === "fas fa-trash-alt"){
            return this.deleteSelf();
        }
        this.props.startLevel({
            name: this.props.name,
            rounds: this.props.rounds
        });
    };

    render() {
        return (
            <div className={"LevelCard"} onClick={this.startLevel}>
                <h2 className={"LevelCard__name"}>{this.props.name}</h2>
                <p className={"LevelCard__description"}>{this.props.description}</p>
                <i
                    className={"fas fa-trash-alt"}
                    onClick={this.deleteSelf}
                />
            </div>
        )
    }
}

LevelCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    rounds: PropTypes.array,
    startLevel: PropTypes.func,
    id: PropTypes.number,
    deleteCard: PropTypes.func
};