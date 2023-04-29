
export interface TurnsViewerProps {
    turns: Turn[];
}
interface TurnProps {
    isActive:boolean;
}
export class Turn {
    isActive: boolean

    constructor({
                    isActive
                }: TurnProps
    ) {
        this.isActive = isActive;
    }
    disqualify() {
        this.isActive = false;
    }
}