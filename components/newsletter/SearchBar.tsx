// UTILS
import React, { Fragment } from "react";
import styled from "styled-components";

// COMPONENTS
import DatePicker, { DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'

// TYPES
import { SearchFilters } from "../../types/SearchFilters"

const SEARCHBAR = styled.form`
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    margin: 1rem;
    color: ${(props) => props.theme.colors.white};

    & fieldset {
        display: flex;
        font-size: ${(props) => props.theme.fontSize.p};
        gap: 1rem;
        border: none;
        background-color: ${(props) => props.theme.colors.blackTrans50};
        padding: 1rem;
    }

    & input {
        display: none;
    }

    & input:checked+label {
        border-bottom: solid 3px ${(props) => props.theme.colors.accent};
    }

    & label {
        cursor: pointer;
    }

    & p {

    }

`

const KEYWORDINPUT = styled.input`

`

export interface Props {
    setSearchFilters: React.Dispatch<React.SetStateAction<SearchFilters | null>>
}

const sortByOptions: string[] = ["Newest", "Oldest"];

const SearchBar: React.FC<Props> = ({ setSearchFilters }) => {
    return (
        <SEARCHBAR>
            <fieldset>
                <p>Sort By:</p>
                <input type="radio" id="sort_by_newest" name="sort_by" value="newest" defaultChecked/>
                <label htmlFor="sort_by_newest">Newest</label>
                <input type="radio" id="sort_by_oldest" name="sort_by" value="oldest" />
                <label htmlFor="sort_by_oldest">Oldest</label>
            </fieldset>
        </SEARCHBAR>
    );
};

export default SearchBar;
