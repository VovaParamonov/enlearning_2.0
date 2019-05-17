import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class LevelHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exp: 0
        }
    }

    render() {
        const score = this.props.score;

        return (
            <header className="header-level">
                <h1>{this.props.levelName}</h1>
                <h1 className={"header__score"}>{`Score: ${score}`}</h1>
                <div className="score-bar"><div className="score-bar__fill" style={{"width":`${score * 10}%`}}></div></div>
            </header>
        )
    }
}

LevelHeader.propTypes = {
    score: PropTypes.number
};