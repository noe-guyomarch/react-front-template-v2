import React, { useState } from "react";
import { IBarathon, IPub } from "../types/api";
import BarathonUnique from "./BarathonUnique";
import styled from 'styled-components';
import Map from './LeafletMap';

interface IBarathonList {
    barathons: IBarathon[];
    pubs: IPub[];
}

const BarathonList = ({ barathons, pubs }: IBarathonList): JSX.Element => {
    const [selectedBarathon, setSelectedBarathon] = useState<IBarathon>(null);

    const selectBarathon = (pub: IBarathon): void => {
        setSelectedBarathon(pub);
    };

    const selectedPubs: IPub[] = selectedBarathon != null ? selectedBarathon.checkpoints.map(c => { return pubs.find(p => p._id == c);}) : [];

    return (
        <>
            <h1>Barathons</h1>
            <div style={{ display: "flex" }}>
                <Half>
                    {barathons.map((barathon) => {
                        return <BarathonUnique key={barathon._id} setSelectedBarathon={selectBarathon} barathon={barathon} />;
                    })}
                </Half>
                <Half>
                    <Map pubs={selectedPubs} selectedPubs={selectedPubs}/>
                </Half>
            </div>
        </>
    );
};

const Half = styled.div`
    width: 50%
`;

export default BarathonList;
