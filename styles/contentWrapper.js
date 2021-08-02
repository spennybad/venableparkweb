import styled from 'styled-components';
import media from '../utils/MediaQueries';

export const CONTENTWRAPPER = styled.div`
    padding: 10rem;

    ${media.width_800`
        padding: 3rem;
    `}
`