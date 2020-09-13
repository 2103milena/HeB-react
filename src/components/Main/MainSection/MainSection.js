import React, { Component } from 'react';
import classes from './MainSection.module.css';

import Button from '../../UI/Button/Button';
import MainTitle from '../MainTitle/MainTitle';


class MainSection extends Component {

    render() {

        return (
            <div>
                <MainTitle>
                    {this.props.title}
                </MainTitle>

                <div className={classes.MainSection} >

                    <div className={classes.ImgDiv}>
                        
                        <div style={{color:'white'}}>{this.props.text}</div>
                        <Button>{this.props.button}</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainSection;