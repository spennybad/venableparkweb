import styled, { css } from "styled-components";
import { BUTTON } from "../../../styles/button.js";
import Link from "next/link";

const NAVBUTTON = styled.a <{ buttonType: string }>`
    text-transform: UPPERCASE;
    text-decoration: none;
    ${({ buttonType }) =>
        
        (buttonType == "mobile" &&
            css`
                margin-left: 1rem; // Temp
                font-size: ${(props) => props.theme.fontSize.h1};
                background-color: ${(props) => props.theme.colors.white};
                padding: 1.5rem;
                color: ${(props) => props.theme.colors.primary};
                transition: all 0.2s;

                &:hover {
                    transform: translateX(1rem);
                }
            `) ||
        (buttonType == "desktop" &&
            css`
                background-color: ${(props) => props.theme.colors.white};
                font-size: ${(props) => props.theme.fontSize.p};
                white-space: nowrap;
                transition: transform 0.2s;

                &:hover {
                    transform: scale(1.1);
                    border-bottom: solid 2px
                        ${(props) => props.theme.colors.primary};
                }
            `)}
`;

type Props = {
    navItem: string;
    buttonType: string;
    handleCloseNavPanel: (newState: boolean) => void
};

function getRoute(route: string): string {
    route = route.replace(" ", "-");
    if (route == "home") {
        return "/";
    } else {
        return "/" + route;
    }
}

const NavButton: React.FC<Props> = ({ navItem, buttonType, handleCloseNavPanel }) => {
    return (
        <li>
            <Link href={getRoute(navItem)} passHref>
                <NAVBUTTON buttonType={buttonType} onClick={() => handleCloseNavPanel(false)}>{navItem}</NAVBUTTON>
            </Link>
        </li>
    );
};

export default NavButton;
