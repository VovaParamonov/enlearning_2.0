import React, {Component} from 'react';

import './style.css';

import PageMain from "../PageMain";
import PageLevel from "../PageLevel";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPage: "PageMain"
        }
    }

    startLevel = (levelData) => {
        let newPage = <PageLevel
            name={levelData.name}
            rounds={levelData.rounds}
            goPage={this.goPage}
        />;

        this.goPage(newPage);
    };

    goPage = (page) => {
        this.setState({selectedPage: page});
    };

    render() {
        let page;
        if (this.state.selectedPage === "PageMain") {
            page = <PageMain
                startLevel={this.startLevel}
            />
        } else {
            page = this.state.selectedPage;
        }

        return page
    }
}

