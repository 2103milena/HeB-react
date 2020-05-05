import React, { Component } from 'react';

import yusimy from '../../../../../assets/images/yusimi99.jpg';
import yuliet from '../../../../../assets/images/yulietsaul.jpg';
import classes from './Bands.module.css';


class Bands extends Component {

    render() {
        return (
            <div >


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

export default Bands;