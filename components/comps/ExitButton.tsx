// UTILS
import styled from 'styled-components';
import media from '../../utils/MediaQueries';
import Image from 'next/image';

// TYPES
import { Employee } from '../../types/Employee';

const BUTTON = styled.button`
    height: 3rem;
    width: 3rem;
    appearance: none;
    outline: none;
    background-color: transparent;

    position: absolute;
    top: 0;
    right: 0;
    margin: max(5rem, 5%);

    cursor: pointer;
`

export interface Props {
    handleTileClick: (employee: Employee | null) => void
}
 
const ExitButton: React.FC<Props> = ( { handleTileClick} ) => {
    return (
        <BUTTON onClick={() => handleTileClick(null)}>
            <Image
                layout="fill"
                src="/images/svgs/x.svg"
                alt="Exit Button"
            />
        </BUTTON>
    );
}
 
export default ExitButton;