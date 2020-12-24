import React, { useState } from 'react';
import { IPub, IBarathon } from '../types/api';
import Button from './Button';
import Input from './Input';
import Map from './LeafletMap';
import styled from 'styled-components';


interface IProps {
    pubs: IPub[]
    addBarathon: (barathon: IBarathon) => void;
}

const BarathonForm = ({ pubs, addBarathon }: IProps): JSX.Element => {
    const [selectedPubs, setSelectedPubs] = useState<IPub[]>([]);

    const handleSubmit = async (e: any): Promise<void> => {
        // evite le rechargement de la page au submit
        e.preventDefault();
        const checkpoints = e.target.elements.namedItem('pubs').value.split(',');

        const values = {
            name: e.target.elements.namedItem('name').value,
            author: e.target.elements.namedItem('author').value,
            checkpoints
        };

        const response = await fetch('https://miw-server.herokuapp.com/barathons', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const responseJSON = await response.json();
        addBarathon(responseJSON);
        console.log(responseJSON);
    };

    const addPub = (id: string): void => {
        const selectedPub = pubs.find((pub: IPub) => {
            if (pub._id === id) return true;
            return false;
        });
        setSelectedPubs([...selectedPubs, selectedPub]);
    };

    const removePub = (id: string): void => {
        setSelectedPubs(selectedPubs.filter((pub: IPub) => {
            if (id === pub._id) return false;
            return true;
        }));
    };

    const removeLastPub = (): void => {
        const pubs = [...selectedPubs];
        pubs.pop();
        setSelectedPubs(pubs);
    };


    return (
        <form onSubmit={handleSubmit} style={{
            margin: 'auto', 
            width: '80%', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}>
            <Input label='Nom' name="name" type="text" placeholder='Nom du parcours' />
            <Input label='Auteur' name="author" type="text" placeholder='Pseudo' />
            <Input label='pubs' name="pubs" type="text" value={selectedPubs.map((pub: IPub) => pub._id).join(',')} />
            <Button onClick={removeLastPub} type='button'>Remove last</Button>
            <Map
                pubs={pubs}
                addPub={addPub}
                removePub={removePub}
                selectedPubs={selectedPubs}
            />
            <Button type='submit'>Soumettre</Button>
        </form>
    );
};

export default BarathonForm;
