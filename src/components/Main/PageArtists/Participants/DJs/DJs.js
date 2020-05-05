import React, { Component } from 'react';

import andy from '../../../../../assets/images/andyu.jpg';
import dvojica from '../../../../../assets/images/dvojica99.jpg';
import yoyo from '../../../../../assets/images/yoyo99.jpg';
import yusimy from '../../../../../assets/images/yusimi99.jpg';
import yuliet from '../../../../../assets/images/yulietsaul.jpg';
import classes from './DJs.module.css';


class DJs extends Component {

    render() {
        return (
            <div >
                
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={andy} alt="DJs" />
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={dvojica} alt="DJs" />
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={yoyo} alt="DJs" />
                </div >
                <div className={classes.Divv} >
                    <img className={classes.Teachers} src={yuliet} alt="DJs" />
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={yusimy} alt="DJs" />
                </div>
            </div>
        )
    }
}

export default DJs;