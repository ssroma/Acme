import React, {useState} from 'react';
import Button from '../../Button/Button';

import './CardHoved.scss';


const CardHoved = (props) => {
    const {id, createdAt, name, userCount, description, view, closeHoverCard} = props;
    console.log( props);

    return (
        <div className="cardHoved-container" >
            <div className="cardHover">
                <h2>{name}</h2>
                
                <div className="cardHoved-property">
                    <img src="/imgs/Users.svg" alt="users" />
                    <p>{userCount} Users</p>
                </div>
                <div className="cardHoved-property">
                    <img src="/imgs/Timezone.svg" alt="time" />
                    <p>{createdAt}</p>
                </div>
                <div className="cardHoved-property">
                    <img src="/imgs/Views.svg" alt="views" />
                    <p>{view}  Views</p>
                </div>

                <div className="cardHoved-property-textArea">
                    <label htmlFor="escription">Decription</label>
                    <textarea 
                        name="Description" 
                        id="description" 
                        cols="40" 
                        rows="4"
                        defaultValue={description}
                    ></textarea>
                </div>
                <div className="cardHoved-property-btn-container">
                    <Button title="Done" btnType={"square"} onClick={ closeHoverCard }/>
                </div>
                
            </div>
        </div>
    )
}

export default CardHoved;
