import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface IProps {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
}

const Input = ({ name, label, type, placeholder, value }: IProps): JSX.Element => {
    return (
        <SInputContainer>
            {label && <SLabel>{label}</SLabel>}
            <SInput
                name={name}
                type={type}
                placeholder={placeholder}
                withLabel={!!label}
                value={value}
                onChange={(): void => {
                    // stuff
                }}
            />
        </SInputContainer>
    );
};

const INPUT_HEIGHT = 30;

const SInputContainer = styled.div`
    display: flex;
    height: ${INPUT_HEIGHT}px;
    margin-bottom: 15px;
`;

const SLabel = styled.label`
    background: ${colors.veryDarkGrey};
    color: rgba(255, 255, 255, 0.8);
    line-height: ${INPUT_HEIGHT}px;
    min-width: 80px;
    text-align: right;
    font-size: 12px;
    padding-right: 15px;
    border-radius: 4px 0 0 4px;
`;

const SInput = styled.input<any>`
    display: block;
    box-sizing: border-box;
    height: ${INPUT_HEIGHT}px;
    padding: 10px 10px;
    border: none;
    border-radius: ${props => props.withLabel ? '0 4px 4px 0' : '4px'};
    background-color: ${colors.lightGrey};
    font-family: ${fonts.text};
    color: ${colors.darkGrey};
    width: 450px;

    &::placeholder {
        color: ${colors.darkGrey};
        opacity: 0.6;
    }
`;

export default Input;