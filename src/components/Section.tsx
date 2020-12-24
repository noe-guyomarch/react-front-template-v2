import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    children: JSX.Element;
}

const Section = ({ children }: IProps): JSX.Element => {
    return (
        <SSection>
            {children}
        </SSection>
    );
};

const SSection = styled.div`
    border-radius: 20px;
    max-width: 1150px;
    padding: 20px;
    background-color: ${colors.grey};
    margin: 30px auto;
`;

export default Section;