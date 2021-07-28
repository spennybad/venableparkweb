import styled from "styled-components";
import Image from "next/image";

import { BUTTON } from "../../styles/button.js";
import NavButton from "./NavButton";

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

const UL = styled.ul`
    height: max-content;
    display: flex;
    list-style: none;
    margin-left: auto;
    margin-right: 2rem;
`;
 
const LOGOWRAPPER = styled.div`
    position: relative;
    width: 15rem;
    height: auto;
`

const BLOGBUTTON = styled(BUTTON)`
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    white-space: nowrap;
    padding: 1rem 2rem;
    border-left: 1px solid ${(props) => props.theme.colors.blackTrans75};
`

type Props = {};

const NavList: String[] = ["home", "about", "team", "newsletter", "contact"];

const Nav: React.FC<Props> = () => {
    return (
        <NAV>
            <LOGOWRAPPER>
                <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    layout="fill"
                />
            </LOGOWRAPPER>
            <UL>
                {NavList.map((navItem: String) => {
                    return (
                        <NavButton key={NavList.indexOf(navItem)}>
                            {navItem}
                        </NavButton>
                    );
                })}
            </UL>
            <BLOGBUTTON>Visit the Blog</BLOGBUTTON>
        </NAV>
    );
};

export default Nav;
