import React, { Component } from 'react';
import diana from '../../../../../assets/images/dianaosmani.jpg';
import andy from '../../../../../assets/images/andyu.jpg';
import dvojica from '../../../../../assets/images/dvojica99.jpg';
import yoyo from '../../../../../assets/images/yoyo99.jpg';
import yusimy from '../../../../../assets/images/yusimi99.jpg';
import yuliet from '../../../../../assets/images/yulietsaul.jpg';
import classes from './Teachers.module.css';


class Teachers extends Component {

    render() {
        return (
            <div >
                <div className={classes.Divv} >
                    <img className={classes.Teachers} src={diana} alt="teachers" />
                </div >
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={andy} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={dvojica} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={yoyo} alt="teachers" />
                </div >
                <div className={classes.Divv} >
                    <img className={classes.Teachers} src={yuliet} alt="teachers" />
                </div>
                <div className={classes.Divv}>
                    <img className={classes.Teachers} src={yusimy} alt="teachers" />
                </div>
            </div>
        )
    }
}

export default Teachers;