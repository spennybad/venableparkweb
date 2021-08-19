// UTILS
import styled from 'styled-components';
import { useEffect } from 'react';

// TYPES
import { Employee } from '../../types/Employee';

const MODAL = styled.div`
    position: fixed;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.blackTrans75};
`

export interface Props {
    handleTileClick: (employee: Employee | null) => void;
}
 
const Modal: React.FC<Props> = ({ handleTileClick }) => {

    useEffect(() => {
        window.addEventListener('keydown', () => handleTileClick(null))
        return () => window.removeEventListener('keydown', () => handleTileClick(null))
    }, [handleTileClick])

    const handleESCPress = (event: React.KeyboardEvent<HTMLDivElement>) => {

        if (event.key == "Esc") {
            handleTileClick(null);
        }
        console.log(event);
    }

    return (
      <MODAL onKeyPress={(event) => handleESCPress(event)}>

      </MODAL>
    );
}
 
export default Modal;