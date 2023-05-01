import React, {useEffect, useState} from 'react';
import LeaderBoardViewer from "./LeaderBoard.viewer";

const LeaderBoardController:React.FC = () => {
    const [board, setBoard] = useState([])
    useEffect(()=>{
        const leaderBoard = JSON.parse(localStorage.getItem('board')??'')
            if(leaderBoard) {
                const sorted = leaderBoard.sort((a, b) => {
                    if (a.turns === b.turns) {
                        return a.time - b.time;
                    } else {
                        return a.turns - b.turns;
                    }
                });
                setBoard(sorted)
            }
    },[])
    return (
        <LeaderBoardViewer board={board}/>
    );
};

export default LeaderBoardController;