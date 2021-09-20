import './Card.scss';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { dataFarmater } from '../../Utils/Utils';
import { useCardContext } from '../../Context/LocationCardContext';


const Card = ({card}) => {
    const {cards, setCards} = useCardContext();
    const {id, createdAt, name, userCount, view } = card;
    
    const selectedCard = (selected) => {
        cards.forEach(card => {
            if(card.id === selected){
                card.view++;
            }   
        });
        setCards([...cards]);
    }

    return (
        <div className="card-container">
            <h2>{name}</h2>
            <Button img="imgs/Edit.svg" btnType={"round"} onClick={ () => { selectedCard(id) } }/>
            <div className="card-property">
                <img src="/imgs/Users.svg" alt="users" />
                <p>{userCount} Users</p>
            </div>
            <div className="card-property">
                <img src="/imgs/Timezone.svg" alt="time" />
                <p>{dataFarmater(createdAt)}</p>
            </div>
            <div className="card-property">
                <img src="/imgs/Views.svg" alt="views" />
                <p>{view} Views</p>
            </div>
        </div>

    )
}

export default Card;