import NavButton from "./NavButtonDesktop";
import styled from "styled-components";
import NavButtonDesktop from "./NavButtonDesktop";

type Props = {
    NavItems: String[];
};

const UL = styled.ul`
    height: 100%;
    display: flex;
    list-style: none;
    margin-left: auto;
    align-self: center;
    margin-right: 2rem;
`;

const DesktopNav: React.FC<Props> = ({ NavItems }) => {
    return (
        <UL>
            {NavItems.map((navItem: String) => {
                return (
                    <NavButtonDesktop key={NavItems.indexOf(navItem)}>
                        {navItem}
                    </NavButtonDesktop>
                );
            })}
        </UL>
    );
};

export default DesktopNav;
