import styled from "styled-components";
import { BUTTON } from "../../styles/button.js";

const NAVBUTTON = styled(BUTTON)`
    text-transform: UPPERCASE;
    white-space: nowrap;
    font-size: ${(props) => props.theme.fontSize.h1};
    background-color: ${(props) => props.theme.colors.accent};
    padding: 2rem;
    color: ${(props) => props.theme.colors.white};
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