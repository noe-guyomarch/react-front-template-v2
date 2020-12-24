import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    type: "button" | "submit" | "reset";
    children: string;
    onClick?: () => void;
}

const Button = ({ type, children, onClick }: IProps): JSX.Element => {
    return (
        <SButton type={type} onClick={onClick}>{children}</SButton>
    );
};

const SButton = styled.button`
    display: block;
    height: 30px;
    padding: 0 15px;
    border-radius: 4px;
    border: none;
    background-color: ${colors.vibrant};
    color: ${colors.white};
    cursor: pointer;
    filter: drop-shadow(0 2px 4px ${chroma(colors.darkGrey).alpha(0.5).css()});
    margin 10px 0px;
    max-width: 120px;
`;

export default Button;