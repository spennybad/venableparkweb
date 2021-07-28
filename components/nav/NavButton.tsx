import styled from "styled-components";
import { BUTTON } from "../../styles/button.js";

const NAVBUTTON = styled(BUTTON)`
    margin-left: 1rem; // Temp

    background-color: ${(props) => props.theme.colors.white};
    text-transform: UPPERCASE;
    white-space: nowrap;
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