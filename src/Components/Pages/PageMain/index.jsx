import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LevelCreater from "../../LevelCreater";

import './style.css';

import defaultLevels from '../../../defaultLevels';

import Header from  "../../Header";
import LevelsList from "../../LevelsList";

import {getCookie, setCookie} from "../../../funcs";

export default class PageMain extends Component{
    constructor(props){
        super(props);

        if (!getCookie('levels')) {
            console.log('Сохраненных уровней нет. Установка уровней по умолчанию');
            setCookie('levels', JSON.stringify(defaultLevels));
        }

        this.state = {
            levels: JSON.parse(getCookie('levels')),
            levelCreater: false
        };

    }

    deleteCard = (cardId) => {
        this.setState(oldState => {
            oldState.levels = oldState.levels.filter(elem => elem.id !== cardId);
            setCookie('levels', JSON.stringify(oldState.levels));
            return {
                levels: oldState.levels
            }
        })
    };

    levelCreaterToggle = () => {
        this.setState(oldState => ({levelCreater: (!oldState.levelCreater)}));
    };

    addLevel = (newLevel) => {
            this.setState(oldState=>{
                newLevel.id = oldState.levels.length+1;
                oldState.levels.push(newLevel);
                setCookie('levels', JSON.stringify(oldState.levels));
                return({levels: oldState.levels, levelCreater: false});
            });
    };

    render() {
        return (
            <div className={"PageMain"}>
                <Header/>
                <main>
                    <LevelsList
                        levels={this.state.levels}
                        startLevel={this.props.startLevel}
                        deleteCard={this.deleteCard}
                    />
                    <button
                        className='levels-list__add-btn'
                        onClick={this.levelCreaterToggle}
                    >
                        <i className="far fa-plus-square"></i>
                    </button>
                </main>
                {(this.state.levelCreater)?<LevelCreater levelCreaterToggle={this.levelCreaterToggle} addLevel={this.addLevel} />:''}
            </div>
        )
    }
}

PageMain.propTypes = {
    startLevel: PropTypes.func
};