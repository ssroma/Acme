import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import CardHoved from '../Card/CardHoved/CardHoved';
import './Locations.scss';


const Location =  () => {
    const [showHoved, setShowHoved] = useState(false);
    const [hoverData, setHoverData] = useState({});
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        axios.get(`https://6033c4d8843b15001793194e.mockapi.io/api/locations`)
        .then( (locations) => {
            let data = locations.data;
            setLocations(data);
            console.log(locations.data);
        });
;   }, []);

    const showHovedCard = (data) => {
        console.log( "showHovedCard called !!!" )
        //setShowHoved(!showHoved);
        //let propsWithViews = {view: view, ...props};
        setShowHoved(!showHoved);
        setHoverData(data);
    }
    
    const closeHoverCard = () => {
        setShowHoved(!showHoved);
    }
    

    return (
        <div className="location-container">
            {
                locations.map((card) => {
                    return <Card {...card} key={card.id} showHovedCard={showHovedCard} /> 
                })
            }
            {showHoved ? <CardHoved {...hoverData} closeHoverCard={closeHoverCard} /> : "" }
            
        </div> 
    )
}


export default Location;