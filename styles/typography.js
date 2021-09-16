import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: ${(props) => props.theme.fontSize.h1};
    color: ${(props) => props.theme.colors.primary};
    font-weight: 400;
`

export const H2 = styled.h2`
    font-size: ${(props) => props.theme.fontSize.h2};
    color: ${(props) => props.theme.colors.primary};
    font-weight: 400;
`