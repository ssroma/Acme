import React, { useState } from 'react';
import Button from '../Button/Button';
import { dataFarmater } from '../../Utils/Utils';
import './Card.scss';


const Card = (props) => {
    const {createdAt, name, userCount, description, showHovedCard } = props;
    let propsWithViews = props;
    const [view, setView] = useState(0);
    const [edit, setEdit] = useState(false);
    
    const incrementView = () => {
        setView(view + 1);
        propsWithViews = {view: view + 1, createdAt, name, userCount, description };
        showHovedCard(propsWithViews);
    }

    return (
        <div className="card-container" onMouseEnter={ () => {setEdit(true)} } onMouseLeave={ () => {setEdit(false)} }>
            <h2>{name}</h2>
            {edit ? <Button img="imgs/Edit.svg" btnType={"round"} onClick={incrementView}/> : ""}
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
                <p>{view ? view : 0 }  Views</p>
            </div>
        </div>

    )
}

export default Card;