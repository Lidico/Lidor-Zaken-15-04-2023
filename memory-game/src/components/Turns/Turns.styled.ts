import {Box, styled} from "@mui/material";
export const StyledTurnsContainer = styled(Box)(() => ({
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
}));