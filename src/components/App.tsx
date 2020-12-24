import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { IPub, IBarathon } from '../types/api';
import BarathonForm from './BarathonForm';
import Section from './Section';
import BarathonList from './BarathonList';


const SContainer = styled.div`
    background-color: ${colors.darkGrey};
    width: 100%;
    padding: 15px;
`;

const App = (): JSX.Element => {
    // Déclaration d'une nouvelle variable d'état interne : pubs
    // RAPPEL: un changement d'état du composant provoque
    //         son re-rendu
    const [pubs, setPubs] = useState<IPub[]>([]);
    const [barathons, setBarathons] = useState<IBarathon[]>([]);


    // fonction executé au montage du composant
    // dans le DOM
    useEffect(() => {
        // obligé d'utiliser une fonction passe-plat pour le code asynchrone
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/pubs'); /* http://localhost:3000/pubs */
            const pubs = await response.json();
            setPubs(pubs);
        };

        const fetchBarathons = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/barathons');
            const barathons = await response.json();
            setBarathons(barathons);
        };

        fetchPubs();
        fetchBarathons();
    }, []);

    const addBarathon = (barathon: IBarathon):void => {
        setBarathons([...barathons, barathon]);
    };

    return (
        <SContainer>
            <Section>
                <BarathonForm pubs={pubs} addBarathon={addBarathon}/>
            </Section>
            <Section>
                <BarathonList pubs={pubs} barathons={barathons} />
            </Section>
        </SContainer>
    );
};


export default App;