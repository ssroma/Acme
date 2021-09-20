import React, {useState, useEffect} from 'react';
import './Locations.scss';
import axios from 'axios';
import Card from '../Card/Card';
import CardHoved from '../Card/CardHoved/CardHoved';
import {useCardContext} from '../../Context/LocationCardContext';

const Location =  () => {

    const {cards, setCards} = useCardContext();

    useEffect(() => {
        axios.get(`https://6033c4d8843b15001793194e.mockapi.io/api/locations`)
        .then( (locations) => {
            let data = locations.data;
            data.map( card => {
                return card.view = 0;
            })
            setCards(data);
            console.log(data)
        });
;   }, []);
    
    return (
        <div className="location-container">
            { cards.map( card => {
                return <Card card={card} key={card.id}/>
            })}
        </div> 
    )
}


export default Location;