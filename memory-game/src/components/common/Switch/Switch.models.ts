export type SwitchType = 'mode' | 'language';
export interface SwitchViewerProps {
    type: SwitchType;
    value: boolean;
    onChange: ()=>void;
}

export interface SwitchControllerProps {
    type: SwitchType;
}