import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/price">BUY YOUR PASS!</NavigationItem>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/program">Program</NavigationItem>
        <NavigationItem link="/artists">Artists</NavigationItem>
        <NavigationItem link="/hotel">Hotel Accomodation</NavigationItem>
        <NavigationItem link="/">Story of HeB</NavigationItem>  
    </ul>
)

export default NavigationItems;