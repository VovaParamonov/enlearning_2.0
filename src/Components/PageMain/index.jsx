import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LevelCreater from "../LevelCreater";

import './style.css';

import Header from  "../Header";
import LevelsList from "../LevelsList";

export default class PageMain extends Component{
    render() {
        return (
            <div className={"PageMain"}>
                <Header/>
                <main>
                    <LevelsList startLevel={this.props.startLevel} />
                </main>
                <LevelCreater/>
            </div>
        )
    }
}

PageMain.propTypes = {
    startLevel: PropTypes.func
};