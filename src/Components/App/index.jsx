import React, {Component} from 'react';

import './style.css';

import PageMain from "../Pages/PageMain";
import PageLevel from "../Pages/PageLevel";

import { setCookie, getCookie } from '../../funcs';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: <PageMain startLevel={this.startLevel} />
        };

        this.pageMain = <PageMain startLevel={this.startLevel} />
    }

    endLevel = () => {
        this.goPage(this.pageMain)
    };

    startLevel = (levelData) => {
        const newPage = <PageLevel
            name={levelData.name}
            rounds={levelData.rounds}
            goPage={this.goPage}
            endLevel={this.endLevel}
        />;

        this.goPage(newPage);
    };



    goPage = (page) => {
        this.setState({selectedPage: page});
    };

    render() {
        return this.state.selectedPage
    }
}

