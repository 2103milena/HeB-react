import React, { Component } from 'react';

import najava from '../../assets/images/najava.jpg';
import classes from './Main.module.css';
import MainSections from '../Main/MainSections/MainSections';
import SimpleSlider from '../../components/Slider/Slider';


class Main extends Component {
    render() {
        return (
            <div>
                <img className={classes.Najava} src={najava} alt="najava" />
                <div className={classes.Celebrate}> Celebrate with us the first decade of cuban festival HAVANA EN BELGRADO ! </div>
                <MainSections />
                <SimpleSlider />
            </div>
        )
    }
}

export default Main;