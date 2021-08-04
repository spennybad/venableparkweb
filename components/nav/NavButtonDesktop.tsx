import styled from "styled-components";
import { BUTTON } from "../../styles/button.js";

const NAVBUTTON = styled(BUTTON)`
    margin-left: 1rem; // Temp

    background-color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.p};
    text-transform: UPPERCASE;
    white-space: nowrap;
    transition: transform .2s;

    &:hover {
        transform: scale(1.1);
        border-bottom: solid 2px ${(props) => props.theme.colors.primary};
    }
`

type Props = {
    
}
 
const NavButton: React.FC<Props> = ({children}, key) => {
    return ( 
        <li key={key}>
            <NAVBUTTON>{children}</NAVBUTTON>
        </li>

    );
}
 
export default NavButton;