import styled from "styled-components";
import NavButton from "./NavButton";

type Props = {
    NavItems: string[];
};

const UL = styled.ul`
    height: 100%;
    min-height: 5rem;
    display: flex;
    list-style: none;
    margin-left: auto;
    align-self: center;
    margin-right: 2rem;
    place-items: center;
    gap: 2rem;
`;

const DesktopNav: React.FC<Props> = ({ NavItems }) => {
    return (
        <UL>
            {NavItems.map((navItem: string) => {
                return (
                  <NavButton key={NavItems.indexOf(navItem)} navItem={navItem} buttonType="desktop" handleCloseNavPanel={() => null}/>
                );
            })}
        </UL>
    );
};

export default DesktopNav;
