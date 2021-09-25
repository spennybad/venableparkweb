import styled from "styled-components";
import Image from "next/image";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import media from "../../../utils/MediaQueries";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NAV = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    height: max-content;
    min-height: 4rem;
    
    background-color: ${(props) => props.theme.colors.white};

    display: flex;

    z-index: 1000;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
    align-items: center;
    padding-inline: 1rem;
`;

const LOGOWRAPPER = styled.div`
    position: relative;
    width: 15rem;
    height: 5rem;
    margin: .3rem;

    ${media.width_700`
        width: 10rem;
    `}
`;

const BLOGBUTTON = styled.a`
    white-space: nowrap;
    font-size: ${(props) => props.theme.fontSize.p};
    text-decoration: none;
    height: 100%;
    padding-inline: 2rem;
    border-left: solid 2px ${(props) => props.theme.colors.blackTrans50};
`;

type Props = {

};

// CHANGE NEWSLETTER TO LETTER ARCHIEVE
const NavItems: string[] = ["home", "about", "fees", "team", "letter archieve", "contact"];
const NavSwitchingPoint: number = 1050;

const Nav: React.FC<Props> = () => {
    const { width } = useWindowDimensions();
    return (
        <NAV>
            <LOGOWRAPPER>
                <Image src="/images/logo/logo_solid.svg" alt="logo" layout="fill" />
            </LOGOWRAPPER>
            { 
                // Swaps nav to mobile nav for viewports with less the 600px of width.
                width <= NavSwitchingPoint ? 
                    <MobileNav NavItems={NavItems}/> :
                    <DesktopNav NavItems={NavItems}/>
            }
            
            { 
                // Removes "Visit the Blog" button on viewports with less the 600 px of width.
                width > NavSwitchingPoint ?
                    <BLOGBUTTON href={"https://jugglingdynamite.com/"}>Danielle&apos;s Blog</BLOGBUTTON> :
                    null
            }
        </NAV>
    );
};

export default Nav;