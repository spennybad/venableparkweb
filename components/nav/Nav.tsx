import styled from "styled-components";
import Image from "next/image";
import useWindowDimensions from "../../hooks/WindowDimensions";

import { BUTTON } from "../../styles/button.js";
import NavButton from "./NavButtonDesktop";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NAV = styled.nav`
    position: fixed;
    top: 0;
    right: 0;

    height: max-content;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};

    display: flex;

    z-index: 100;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

const LOGOWRAPPER = styled.div`
    position: relative;
    width: 15rem;
    height: auto;
`;

const BLOGBUTTON = styled(BUTTON)`
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    white-space: nowrap;
    padding: 1rem 2rem;
    border-left: 1px solid ${(props) => props.theme.colors.blackTrans75};
    font-size: ${(props) => props.theme.fontSize.p};
`;

type Props = {};

const NavItems : String[] = ["home", "about", "team", "newsletter", "contact"];

const Nav: React.FC<Props> = () => {
    const { width } = useWindowDimensions();
    return (
        <NAV>
            <LOGOWRAPPER>
                <Image src="/images/logo/logo.svg" alt="logo" layout="fill" />
            </LOGOWRAPPER>
            { 
                // Swaps nav to mobile nav for viewports with less the 600px of width.
                width <= 600 ? 
                    <MobileNav NavItems={NavItems}/> :
                    <DesktopNav NavItems={NavItems}/>
            }
                        
            { 
                // Removes "Visit the Blog" button on viewports with less the 600 px of width.
                width > 600 ? <BLOGBUTTON>Visit the Blog</BLOGBUTTON> : null 
            }
        </NAV>
    );
};

export default Nav;

// const alive = true;
// const result;

// while (alive == true) {
//   result = try_hard();
//   if (dead == true) {
//     alive = false;
//   }
// }

// const try_hard = () => {
//   return no_matter_how_hard_you_try(); 
// }

// void no_matter_how_hard_you_try() {
//   const result = lose;
//   return result;
// }
