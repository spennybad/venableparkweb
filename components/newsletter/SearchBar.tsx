// UTILS
import React, { Fragment } from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// TYPES
import { SearchFilters } from "../../types/SearchFilters";

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

const SORTBYRADIOBUTTON = styled.input`
    display: none;

    & :checked + label {
        border-bottom: solid 3px ${(props) => props.theme.colors.accent};
    }

    & + label {
        cursor: pointer;
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
    updateSearchFilters: (newSearchFilters: SearchFilters) => void;
    searchFilters: SearchFilters;
    handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<Props> = ({
    updateSearchFilters,
    searchFilters,
    handleSearchSubmit,
}) => {

    const handleRadioChange = (state: string) => {
        updateSearchFilters({
            keyWord: searchFilters.keyWord,
            sortBy: state,
            date: searchFilters.date,
        });
    };

    const handleYearChange = (state: number) => {
        updateSearchFilters({
            keyWord: searchFilters.keyWord,
            sortBy: searchFilters.sortBy,
            date: state,
        });
    };

    return (
        <SEARCHBAR onSubmit={(event) => handleSearchSubmit(event)}>
            {/* <fieldset>
                <p>Sort By:</p>
                <SORTBYRADIOBUTTON
                    type="radio"
                    id="sort_by_newest"
                    name="sort_by"
                    value="newest"
                    defaultChecked
                    onChange={() => handleRadioChange("newest")}
                />
                <label htmlFor="sort_by_newest">Newest</label>
                <SORTBYRADIOBUTTON
                    type="radio"
                    id="sort_by_oldest"
                    name="sort_by"
                    value="oldest"
                    onChange={() => handleRadioChange("oldest")}
                />
                <label htmlFor="sort_by_oldest">Oldest</label>
            </fieldset> */}
            <fieldset>
                <label htmlFor="year">Year:</label>
                <YEARINPUT type="number" id="year" name="year" onChange={(event) => handleYearChange(Number(event.target.value))} defaultValue={2021} />
            </fieldset>
            <button type="submit">Search</button>
        </SEARCHBAR>
    );
};

export default SearchBar;
