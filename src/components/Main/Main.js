import React, { Component } from 'react';

import najava from '../../assets/images/postponed.jpg';
import classes from './Main.module.css';
import MainSections from '../Main/MainSections/MainSections';
import SimpleSlider from '../../components/Slider/Slider';
// import Newsletter from '../UI/NewsLetter/Newsletter';
import News from '../Slideshow/News';
import LineUp from '../LineUp/LineUp';


class Main extends Component {



    render() {
        return (
            <div>
                <img className={classes.Najava} src={najava} alt="najava" />
                <div className={classes.Celebrate}> Here we go again! From 5th to 8th of November Havana en Belgrado ! </div>
                <div className={classes.Decade}>
                    <div className={classes.FirstPar}>  A DECADE.</div>

                    <div> That's how long this beautiful idea exists. It's hard to believe that so much time passed. We are older and hopefully wiser but the passion and joy that HeB brings us, is stronger and bigger then ever!! With excitement and enthusiasm we present to you HAVANA EN BELGRADO 10! Celebrate with us the first decade!! </div>

                    <div className={classes.LastPar}> Your HeB team</div>

                </div>
                <News />
                <LineUp/>
                <MainSections />      
                <SimpleSlider />
                {/* <Newsletter/> */}
            </div>
        )
    }
}

export default Main;