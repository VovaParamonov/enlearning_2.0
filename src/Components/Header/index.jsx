import React, {Component} from 'react';

import './style.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1 className={"logoMain"}><span>local</span>EnLearning</h1>
            </header>
        )
    }
}