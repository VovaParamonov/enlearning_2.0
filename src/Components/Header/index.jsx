import React, {Component} from 'react';

import './style.css';
// import logo from '../../../public/Eni-min.png';

export default class Header extends Component {
    render() {
        return (
            <header className="header-main" >
                <img className="eni_logo" src={require('./Eni-min.svg')} alt=""/>
                <h1 className={"logoMain"}><span>local</span>EnLearning</h1>
            </header>
        )
    }
}