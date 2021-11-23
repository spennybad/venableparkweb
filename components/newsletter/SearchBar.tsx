// UTILS
import React from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries";
import { useState } from 'react';

const SEARCHBAR = styled.form`
    height: 5rem;
    width: max-content;
    display: flex;
    align-self: center;
    margin: 1rem;
    color: ${(props) => props.theme.colors.white};
    padding-inline: 1rem;
    font-size: ${(props) => props.theme.fontSize.p};

    ${media.width_400`
        justify-content: center;
        justify-self: center;
    `}

    & fieldset {
        background-color: ${(props) => props.theme.colors.blackTrans50};
        display: flex;
        place-items: center;
        gap: 1rem;
        border: none;
        height: 100%;
        padding-inline: 2rem;
    }

    & button[type="submit"] {
        padding: 0.5rem;
        height: 100%;
        background-color: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.accent};
        appearance: none;
        color: ${(props) => props.theme.colors.white};
        cursor: pointer;
        text-transform: uppercase;
    }
`;


const YEARINPUT = styled.input`
    border: none;
    appearance: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
    width: 10rem;
    font-size: ${(props) => props.theme.fontSize.p};
    border-bottom: solid 2px ${(props) => props.theme.colors.white};
    text-align: center;

    &:focus {
        border: none;
        appearance: none;
        outline: none;
        border-bottom: solid 2px ${(props) => props.theme.colors.accent};
    }

    // HIDES ARROWS FOR NUMBER INPUT FEILD ON ALL BROWSERS
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export interface Props {
    defaultValue: string;
    handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>, value: string) => void;
}

const SearchBar: React.FC<Props> = ({
    defaultValue,
    handleSearchSubmit
}) => {

    const [currentYearValue, setCurrentYearValue] = useState<string>(defaultValue);
    
    return (
        <SEARCHBAR onSubmit={(event) => handleSearchSubmit(event, currentYearValue)}>
            <fieldset>
                <label htmlFor="year">Year:</label>
                <YEARINPUT 
                    type="string" 
                    id="year" 
                    name="year" 
                    defaultValue={defaultValue}
                    onChange={e => setCurrentYearValue(e.target.value)}
                />
            </fieldset>
            <button type="submit">Search</button>
        </SEARCHBAR>
    );
};

export default SearchBar;
