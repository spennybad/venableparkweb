// UTILS
import styled from 'styled-components';
import media from '../../utils/MediaQueries';

// TYPES
import { Employee } from '../../types/Employee';

const BUTTON = styled.button`
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.primary};

    position: absolute;
    top: 0;
    right: 0;
    margin: 5%;

    cursor: pointer;
`

export interface Props {
    handleTileClick: (employee: Employee | null) => void
}
 
const ExitButton: React.FC<Props> = ( { handleTileClick} ) => {
    return (
        <BUTTON onClick={ () => handleTileClick(null)}/>
    );
}
 
export default ExitButton;