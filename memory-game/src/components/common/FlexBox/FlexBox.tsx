import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import { Sizes, FlexDirection, FlexAreas } from '../../../types/Styles';

interface FlexBoxProps {
    direction?: FlexDirection;
    gap?: Sizes | '0';
    justifyContent?: FlexAreas;
    alignItems?: FlexAreas;
    children: JSX.Element | ReactNode;
}
const FlexBox: React.FC<FlexBoxProps> = ({
                                             children,
                                             direction = 'row',
                                             gap = '0',
                                             justifyContent = 'start',
                                             alignItems = 'start',
                                         }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: direction,
                gap: gap === '0' ? gap : `var( --size-${gap})`,
                alignItems: alignItems,
                justifyContent: justifyContent,
            }}>
            {children}
        </Box>
    );
};

export default FlexBox;
