import styled from 'styled-components';

export const BUTTON = styled.button`
    appearance: none;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSize.p};
`