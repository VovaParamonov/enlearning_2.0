import React, {useState} from 'react';

import { Transition } from "react-transition-group";

import './style.css';

export default function RoundTypeSelect (props) {
    const [isOpen, setIsOpen] = useState(false);
    let roundMods = ["Write", "Select"];

    let toggleView = e => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className={`create-round__type_select ${(isOpen? "opened":"")}`}>
            <button onClick={toggleView}><span>{props.mode}</span><i className={`fas fa-chevron-${(isOpen) ? "left" : "right"}`}/></button>
            <Transition
                in={isOpen}
                timeout={{
                    enter: 0,
                    exit: 500
                }}
                unmountOnExit={true}
            >
                {state => (
                    <ul className={`type_select__ul-${state}`}>{
                        roundMods.filter(el => el !== props.mode)
                            .map(el => <li key={el} onClick={() => {
                                props.changeMode(props.roundId, el);
                                setIsOpen(!isOpen);
                            }}>{el}</li>)
                    }</ul>
                )
            }
            </Transition>

            {/*{(isOpen)? <ul>{*/}
                {/*roundMods.filter(el=>el!==props.mode)*/}
                    {/*.map(el=><li key={el} onClick={()=>{*/}
                        {/*props.changeMode(props.roundId, el);*/}
                        {/*setIsOpen(!isOpen);*/}
                    {/*}}>{el}</li>)*/}
            {/*}</ul>:""}*/}
        </div>
    )
}