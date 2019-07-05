import React from 'react';

import RoundCreater from "./RoundCreater";
import { useLevelCtreater } from '../../hooks'

import './style.css';


export default function LevelCreater (props) {
    const [
        title, description, rounds,
        addator, // has methods for add: round, answer
        changer, // has methods for change: title,description,question,answer
        create,
        titleRef, descriptionRef
    ] = useLevelCtreater(props);

    return (
        <div className="create-window">
            <button onClick={props.levelCreaterToggle} className='level-creater__exit-btn' ><i className="far fa-times-circle"></i></button>
            <form action="#" className="create-form">
                <div className='level-create__head'>
                    <input
                        className='level-creat__title'
                        ref={titleRef}
                        type="text"
                        value={title}
                        placeholder='Name of level'
                        onChange={changer.title}
                    />
                    <input
                        className='level-creat__description'
                        ref={descriptionRef}
                        type="text"
                        value={description}
                        placeholder='Description'
                        onChange={changer.description}
                    />
                </div>
                {
                    rounds.map((round,id) => (
                        <RoundCreater
                            key={id}
                            roundId={id}
                            question={round.text}
                            answer={round.answer}
                            mode={round.mode}
                            addAnswer={addator.answer}
                            changeQuestion={changer.question}
                            changeAnswer={changer.answer}
                            changeMode={changer.mode}
                        />
                    ))
                }
                <button className="create-round__add-btn create-round__add-round-btn" onClick={addator.round}><i className="far fa-plus-square"></i></button>
            </form>
            <button className="create-window__create-button" onClick={create}>Создать</button>
        </div>
    )
}


// export default class LevelCreater extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             title:'',
//             description:'',
//             rounds: [
//                 {
//                     id: 1,
//                     text: '',
//                     answer: ['']
//                 }
//             ]
//         };
//
//         this.titleRef = React.createRef();
//         this.descriptionRef = React.createRef();
//     }
//
//     addRound = (e) => {
//         e.preventDefault();
//         this.setState(oldState => {
//             return {
//                 rounds: oldState.rounds.concat([{
//                     id: oldState.rounds.length+1,
//                     text: '',
//                     answer: ['']
//                 }])
//             }
//         })
//     };
//
//     addAnswer = (roundId) => {
//         this.setState(oldState => {
//             return {
//                 rounds: oldState.rounds.map((round,id) => {
//                     if (id === roundId){
//                         round.answer.push('');
//                     }
//                     return round
//                 })
//             }
//         })
//     };
//
//     changeTitle = () => {
//         this.setState({
//             title: this.titleRef.current.value
//         })
//     };
//     changeDescription = () => {
//         this.setState({
//             description: this.descriptionRef.current.value
//         })
//     };
//
//     changeQuestion = (roundId, text) => {
//         this.setState(oldState => {
//             return {
//                 rounds: oldState.rounds.map((round,rId) => {
//                     if (rId === roundId) {
//                         round.text = text
//                     }
//                     return round;
//                 })
//             }
//         });
//     };
//
//     changeAnswer = (roundId, answerId, text) => {
//         this.setState(oldState => {
//             let newRounds = oldState.rounds.slice();
//
//             newRounds = newRounds.map((round,rId) => {
//                 if (rId === roundId) {
//                     round.answer = round.answer.map((ans, ansId) => {
//                         if (ansId === answerId) {
//                             return text;
//                         } else {
//                             return ans;
//                         }
//                     });
//                 }
//                 return round;
//             });
//
//             return {
//                 rounds: newRounds.slice()
//             }
//         })
//     };
//
//     create = (e) => {
//         e.preventDefault();
//         if (this.state.rounds.length <= 2)
//             return alert('В уровне должно быть больше двух раундов');
//         let newLevel = {
//             id: 'none',
//             name: this.state.title || 'MyLevel',
//             description: this.state.description,
//             rounds: this.state.rounds
//         };
//         this.props.addLevel(newLevel);
//     };
//
//     render() {
//         return (
//             <div className="create-window">
//                 <button onClick={this.props.levelCreaterToggle} className='level-creater__exit-btn' ><i className="far fa-times-circle"></i></button>
//                 <form action="#" className="create-form">
//                     <div className='level-create__head'>
//                         <input
//                             className='level-creat__title'
//                             ref={this.titleRef}
//                             type="text"
//                             value={this.state.title}
//                             placeholder='Название'
//                             onChange={this.changeTitle}
//                         />
//                         <input
//                             className='level-creat__description'
//                             ref={this.descriptionRef}
//                             type="text"
//                             value={this.state.description}
//                             placeholder='Описание'
//                             onChange={this.changeDescription}
//                         />
//
//                     </div>
//                     {
//                         this.state.rounds.map((round,id) => (
//                                 <RoundCreater
//                                     key={id}
//                                     roundId={id}
//                                     question={round.text}
//                                     answer={round.answer}
//                                     addAnswer={this.addAnswer}
//                                     changeQuestion={this.changeQuestion}
//                                     changeAnswer={this.changeAnswer}
//                                 />
//                         ))
//                     }
//                     <button className="create-round__add-btn create-round__add-round-btn" onClick={this.addRound}><i className="far fa-plus-square"></i></button>
//                 </form>
//
//                 <button className="create-window__create-button" onClick={this.create}>Создать</button>
//             </div>
//         )
//     }
// }

//start changes