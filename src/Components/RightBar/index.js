import React from 'react';

import './style.css';

import { getCookie, setCookie } from "../../funcs";

export default function RightBar (props) {

    // setCookie("lastStatistic", JSON.stringify({
    //     error: 3,
    //     right: 9,
    //     speed: 382
    // }));
    let statistic;
    if(getCookie("lastStatistic")) {
        statistic = JSON.parse(getCookie("lastStatistic"));
    }

    // console.log(statistic);

    return (
        <article className="right-bar" >
            <h2>Statistic last test</h2>
            {(!statistic)?
                <div className="right-bar__empty">
                    <img className="right-bar__img" src={require('../../img/Eni-min.svg')} alt="Eni"/>
                    <p className="right-bar__empty-text">Empty now</p>
                </div>
            :
                <div className="right-bar__statistic">
                    <p className="statistic__level-name">{statistic.levelName}</p>
                    <p>{`Error: ${statistic.error}`}</p>
                    <p>{`Right: ${statistic.right}`}</p>
                    <p>{`Speed: ${statistic.speed} s`}</p>
                    <span>{`Completed: ${statistic.completed}`}</span>
                </div>
            }

        </article>
    )
}