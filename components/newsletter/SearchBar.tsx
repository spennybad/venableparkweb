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


const YEARINPUT = styled.select`

`;

export interface Props {
	newsletterYears: string[];
	handleSearchSubmit: (
		value: string
	) => void;
}

const SearchBar: React.FC<Props> = ({
    newsletterYears,
    handleSearchSubmit
}) => {

    const [currentYearValue, setCurrentYearValue] = useState<string>(newsletterYears[0]);
    
    return (
		<SEARCHBAR>
			<fieldset>
				<label htmlFor="year">Year:</label>
				<YEARINPUT
					id="year"
					name="year"
					defaultValue={newsletterYears[0]}
					onChange={(e) => handleSearchSubmit(e.target.value)}
				>
					{
                        newsletterYears.map(year => (
                            <option>{year}</option>
                        ))
                    }
				</YEARINPUT>
			</fieldset>
		</SEARCHBAR>
	);
};

export default SearchBar;
