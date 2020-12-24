import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { IPub } from '../types/api';
import Button from './Button';

interface IProps {
    pub: IPub;
    addPub?: (id: string) => void;
    removePub?: (id: string) => void;
}

const PubThumbnail = ({ pub, addPub, removePub }: IProps): JSX.Element => {
    const { name, img, description, _id } = pub;
    return (
        <SThumbnail>
            <SContent>
                <STitle>{name}</STitle>
            </SContent>
            <Button
                type='button'
                onClick={(): void => {
                    addPub && addPub(_id);
                }}
            >
                Add
            </Button>
            <Button
                type='button'
                onClick={(): void => {
                    removePub && removePub(_id);
                }}
            >
                Remove
            </Button>
        </SThumbnail>
    );
};

const THUMBNAIL_WIDTH = 125;
const THUMBNAIL_MAX_HEIGHT = 200;

const SDescription = styled.p`
    font-size: 14px;
    color: ${colors.white};
`;

const SContent = styled.div`
    padding: 10px 15px;
    box-sizing: border-box;
`;

const STitle = styled.span`
    display: block;
    width: 100%;
    color: ${colors.white};
    font-family: ${fonts.title};
    text-align: center;
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;

`;

const SImg = styled.div<any>`
    height: 50px;
    background-image: url('${(props: any): string => props.src}');
    background-size: cover;
    background-position: center center;
`;

const SThumbnail = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    border-radius: 4px;
    overflow: hidden;
    background: ${chroma(colors.veryDarkGrey).alpha(0.5).css()};
    width: ${THUMBNAIL_WIDTH}px;
    max-height: ${THUMBNAIL_MAX_HEIGHT}px;
    overflow: auto;
`;

export default PubThumbnail;