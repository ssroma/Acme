import {useContext, createContext, useState} from 'react';

const CardContext = createContext();

export const CardContextProvider = ({children}) => {
    const [cards, setCards] = useState([]);

    return (
        <CardContext.Provider value={{
            cards, 
            setCards
            }} >
            {children}
        </CardContext.Provider>
    )
}

export function useCardContext(){
    return useContext(CardContext);
}


