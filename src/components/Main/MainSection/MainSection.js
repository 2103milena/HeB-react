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

                    <div style={{ marginTop: '10px' }}>
                        {this.props.text}
                    </div>
                    <Button >{this.props.button}</Button>
                    <img className={classes.MainSectionImage} src={this.props.image} alt={this.props.alt} />
                </div>
            </div>
        )
    }
}

export default MainSection;