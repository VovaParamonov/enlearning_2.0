import React from 'react';

import './style.css';

export default function Header (props) {
    return (
        <header className="header-main" >
            <img className="eni_logo" src={require('../../img/Eni-min.svg')} alt=""/>
            <h1 className={"logoMain"}><span>local</span>EnLearning</h1>
        </header>
    )
}