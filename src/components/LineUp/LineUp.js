import React, { Component } from 'react';
import classes from './LineUp.module.css';
import lineUpPic from '../../assets/images/grupnaa.jpg';
import Button from '../UI/Button/Button';
import MainTitle from '../Main/MainTitle/MainTitle';


class LineUp extends Component {

    render() {

        return (
            <div>
                <MainTitle>
                    LINE UP
                </MainTitle>

                <div className={classes.MainSection} >

                    <div className={classes.ImgDiv}>
                        {/* <div> */}
                            {/* <div style={{ color: 'white' }}>Be informed about the artists to come to Havana En Belgrado 10 !</div> */}
                            <Button>DISCOVER OUR LINE UP</Button>
                        {/* </div> */}
                        <img className={classes.Pic} src={lineUpPic} alt="lineUp" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LineUp;