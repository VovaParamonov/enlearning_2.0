import React from 'react';

import './style.css';

export default function LevelHeader (props) {
    //const [exp, setExp] = useState(0);
    const score = props.score;

    return(
        <header className="header-level">
            <h1>{props.levelName}</h1>
            <h1 className={"header__score"}>{`Score: ${score}`}</h1>
            <div className="score-bar"><div className="score-bar__fill" style={{"width":`${score * 10}%`}}></div></div>
        </header>
    );
}
