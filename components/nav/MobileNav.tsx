import styled, { css } from "styled-components";
import { useState } from "react";

import NavButtonMobile from "./NavButtonMobile";
import { BUTTON } from "../../styles/button";

type Props = {
    NavItems: String[];
};

const NAVTOGGLEBUTTON = styled(BUTTON)`
    min-height: 4rem;
    min-width: 4rem;
    margin-left: auto;
    display: flex; // In loving memory of FrogmanOW <3
    flex-direction: column;
    justify-content: space-around;
    gap: 0.4rem;
    padding: 1rem 0rem;
    margin-right: 0.5rem;
    background-color: transparent;
    z-index: 1;

    & div {
        height: 100%;
        width: 100%;
        background-color: ${(props) => props.theme.colors.primary};
    }
`;

const NAVPANEL = styled.div<{ isNavPanel: boolean }>`
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.blackTrans75};
    display: grid;
    place-items: center;
    z-index: 0;

    ${({ isNavPanel }) =>
        (isNavPanel && css`
            transform: translateX(0%);
        `)
        ||
        (!isNavPanel && css`
            transform: translateX(100%);
        `)
    }
`;

const UL = styled.ul`
    list-style: none;
    display: grid;
    gap: 1rem;
    justify-items: center;
`

function handleNavButtonClick(setIsNavPanel: (value: boolean) => void, isNavPanel: boolean): void {
    setIsNavPanel(!isNavPanel);
    console.log(isNavPanel);
}
    

const MobileNav: React.FC<Props> = ({ NavItems }) => {
    const [isNavPanel, setIsNavPanel] = useState(false);
    return (
        <>
            <NAVTOGGLEBUTTON onClick={() => handleNavButtonClick(setIsNavPanel, isNavPanel)}>
                <div />
                <div />
                <div />
            </NAVTOGGLEBUTTON>
            <NAVPANEL isNavPanel={isNavPanel}>
                <UL>
                    {NavItems.map((navItem: String) => {
                        return (
                            <NavButtonMobile key={NavItems.indexOf(navItem)} >
                                {navItem}
                            </NavButtonMobile>
                        );
                    })}
                </UL>
            </NAVPANEL>
        </>
    );
}

export default MobileNav;
