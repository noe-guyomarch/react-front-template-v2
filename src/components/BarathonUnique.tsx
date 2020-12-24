import React from 'react';
import { IBarathon } from '../types/api';
import Button from './Button';
import styled from 'styled-components';


interface IBarathonUnique {
    barathon: IBarathon;
    setSelectedBarathon?: (barathon: IBarathon) => void;
}

const BarathonUnique = ({ barathon, setSelectedBarathon }: IBarathonUnique): JSX.Element => {
    return (
        <SBarathonUnique>
            <p>
                {barathon.name}
            </p>
            <Button
                type="button"
                onClick={() :void => {
                    setSelectedBarathon && setSelectedBarathon(barathon);
                }}
            >
                Regarder
            </Button>
        </SBarathonUnique>
        
    );
};
const SBarathonUnique = styled.div`
    margin: 30px 0px; 
`;
export default BarathonUnique;