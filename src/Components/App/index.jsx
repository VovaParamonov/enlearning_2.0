import React, {useState} from 'react';

import './style.css';
import './../../hint.css';

import PageMain from "../Pages/PageMain";
import PageLevel from "../Pages/PageLevel";

export default function App (props) {
    const goPage = (page) => {
        setSelectedPage(page);
    };

    const endLevel = () => {
        goPage(pageMain);
    };

    const startLevel = levelData => {
        const newPage = <PageLevel // create level page
            name={levelData.name}
            rounds={levelData.rounds}
            goPage={goPage}
            endLevel={endLevel}
        />;

        goPage(newPage);
    };

    let pageMain = <PageMain startLevel={startLevel} />;

    const [selectedPage, setSelectedPage] = useState(pageMain);

    return selectedPage
}
