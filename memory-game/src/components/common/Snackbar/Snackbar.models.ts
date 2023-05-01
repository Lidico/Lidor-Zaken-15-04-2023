
export type SnackTypes = 'yellow'|'green';




export enum PositiveText {
    Text1 = "text.positive1",
    Text2 = "text.positive2",
    Text3 = "text.positive3"
}

export enum ComfortText {
    Text1 = "text.comfort1",
    Text2 = "text.comfort2",
    Text3 = "text.comfort3"
}

export interface StyledSnackbarProps {
    snackType: SnackTypes
}

export interface SnackBarProps {
    isPositive: boolean;
    open: boolean;
}