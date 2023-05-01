export interface ModalProps {
    open: boolean,
    text: string,
    onSave?:()=> void;
    onRetry?:()=> void;
}