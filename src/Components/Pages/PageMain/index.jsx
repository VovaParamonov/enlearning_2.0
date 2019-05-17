import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LevelCreater from "../../LevelCreater";

import './style.css';

import defaultLevels from '../../../defaultLevels';

import Header from  "../../Header";
import LevelsList from "../../LevelsList";
import RightBar from "../../RightBar";

import {getCookie, setCookie} from "../../../funcs";


export default function PageMain (props) {
    if (!getCookie('levels')) {
        console.log('Сохраненных уровней нет. Установка уровней по умолчанию');
        setCookie('levels', JSON.stringify(defaultLevels));
    }

    const [levels, setLevels] = useState(JSON.parse(getCookie('levels')));
    const [levelCreater, setLevelCreater] = useState(false);

    const deleteCard = (cardId) => {
        let newLevels = levels.filter(elem => elem.id !== cardId);
        setCookie('levels', JSON.stringify(newLevels));
        setLevels(newLevels);
    };

    const levelCreaterToggle = () => {
        setLevelCreater(!levelCreater);
    };

    const addLevel = (newLevel) => {
        newLevel.id = levels.length+1;
        let newLevels = levels.slice();
        newLevels.push(newLevel);
        setCookie('levels', JSON.stringify(newLevels));
        setLevels(newLevels);
        setLevelCreater(false);
     };

    return (
        <div className={"PageMain"}>
             <Header/>
             <main>
                 <LevelsList
                     levels={levels}
                     startLevel={props.startLevel}
                     deleteCard={deleteCard}
                 />
                 <button
                     className='levels-list__add-btn hint--right'
                     aria-label='Создать новый тест'
                     onClick={levelCreaterToggle}
                 >
                     <i className="far fa-plus-square"></i>
                 </button>
             </main>
            <RightBar/>
            {(levelCreater)?<LevelCreater levelCreaterToggle={levelCreaterToggle} addLevel={addLevel} />:''}
         </div>
    )
}


// export default class PageMain extends Component{
//     constructor(props){
//         super(props);
//
//         if (!getCookie('levels')) {
//             console.log('Сохраненных уровней нет. Установка уровней по умолчанию');
//             setCookie('levels', JSON.stringify(defaultLevels));
//         }
//
//         this.state = {
//             levels: JSON.parse(getCookie('levels')),
//             levelCreater: false
//         };
//
//     }
//
//     deleteCard = (cardId) => {
//         this.setState(oldState => {
//             oldState.levels = oldState.levels.filter(elem => elem.id !== cardId);
//             setCookie('levels', JSON.stringify(oldState.levels));
//             return {
//                 levels: oldState.levels
//             }
//         })
//     };
//
//     levelCreaterToggle = () => {
//         this.setState(oldState => ({levelCreater: (!oldState.levelCreater)}));
//     };
//
//     addLevel = (newLevel) => {
//             this.setState(oldState=>{
//                 newLevel.id = oldState.levels.length+1;
//                 oldState.levels.push(newLevel);
//                 setCookie('levels', JSON.stringify(oldState.levels));
//                 return({levels: oldState.levels, levelCreater: false});
//             });
//     };
//
//     render() {
//         return (
//             <div className={"PageMain"}>
//                 <Header/>
//                 <main>
//                     <LevelsList
//                         levels={this.state.levels}
//                         startLevel={this.props.startLevel}
//                         deleteCard={this.deleteCard}
//                     />
//                     <button
//                         className='levels-list__add-btn hint--right'
//                         aria-label='Создать новый тест'
//                         onClick={this.levelCreaterToggle}
//                     >
//                         <i className="far fa-plus-square"></i>
//                     </button>
//                 </main>
//                 {(this.state.levelCreater)?<LevelCreater levelCreaterToggle={this.levelCreaterToggle} addLevel={this.addLevel} />:''}
//             </div>
//         )
//     }
// }

PageMain.propTypes = {
    startLevel: PropTypes.func
};