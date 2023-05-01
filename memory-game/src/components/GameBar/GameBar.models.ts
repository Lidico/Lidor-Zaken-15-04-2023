export interface GameBarViewerProps {
    seconds: number;
    isModalOpen:boolean;
    modalText: string;
    onSave: ()=>void;
    onRetry: ()=>void;
}

export interface ToSaveScore {
    time: number;
    playerName: string;
    turns: number
    score: number
}