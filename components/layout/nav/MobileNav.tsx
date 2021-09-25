import styled, { css } from "styled-components";
import { useState } from "react";

import NavButton from "./NavButton";
import { BUTTON } from "../../../styles/button";

const NAVTOGGLEBUTTON = styled(BUTTON)<{ isNavPanel: boolean }>`
    height: 4rem;
    width: 4rem;
    margin-left: auto;

    display: flex; // In loving memory of FrogmanOW <3
    flex-direction: column;

    place-content: center;
    gap: .5rem;
    background-color: transparent;
    margin-right: 1rem;
    z-index: calc(1001);

    & div {
        height: 10%;
        width: 100%;
        background-color: ${(props) => props.theme.colors.primary};
    }

    ${({ isNavPanel }) =>
        isNavPanel &&
        css`
            & div {
                background-color: ${(props) => props.theme.colors.white};
            }
        `}
`;

const NAVPANEL = styled.div<{ isNavPanel: boolean }>`
    position: fixed;
    inset: 0 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.blackTrans75};
    display: grid;
    align-items: center;
    justify-items: center;
    z-index: inherit;

    ${({ isNavPanel }) =>
        (isNavPanel &&
            css`
                transform: translateX(0%);
            `) ||
        (!isNavPanel &&
            css`
                transform: translateX(100%);
            `)}
`;

const UL = styled.ul`
    list-style: none;
    display: grid;
    gap: 5rem;
    width: max-content;
    justify-items: center;
`;

function handleNavButtonClick(
    setIsNavPanel: (value: boolean) => void,
    isNavPanel: boolean
): void {
    setIsNavPanel(!isNavPanel);
}

type Props = {
    NavItems: string[];
};

const MobileNav: React.FC<Props> = ({ NavItems }) => {
    const [isNavPanel, setIsNavPanel] = useState(false);
    return (
        <>
            <NAVTOGGLEBUTTON
                isNavPanel={isNavPanel}
                onClick={() => handleNavButtonClick(setIsNavPanel, isNavPanel)}
            >
                <div />
                <div />
                <div />
            </NAVTOGGLEBUTTON>
            <NAVPANEL isNavPanel={isNavPanel}>
                <UL>
                    {NavItems.map((navItem: string) => {
                        return (
                            <NavButton
                                key={NavItems.indexOf(navItem)}
                                navItem={navItem}
                                buttonType="mobile"
                                handleCloseNavPanel={setIsNavPanel}
                            />
                        );
                    })}
                    <NavButton
                        key={"blog-button"}
                        navItem={"Visit Danielle's Blog"}
                        buttonType="mobile"
                        handleCloseNavPanel={setIsNavPanel}
                    />
                </UL>
            </NAVPANEL>
        </>
    );
};

export default MobileNav;
