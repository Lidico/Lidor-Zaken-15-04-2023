import React, {useEffect, useState} from 'react';
import StartPageViewer from "./StartPage.viewer";
import { v4 as uuidv4 } from 'uuid';

const StartPageController:React.FC = () => {
    const [gameID,setGameID] = useState('');

    useEffect(()=>{
        const id = uuidv4();
        setGameID(id)
    },[])

    return (
        <StartPageViewer gameID={gameID}/>
    );
};

export default StartPageController;