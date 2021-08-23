import styled from 'styled-components';

const MISSIONTILE = styled.li`
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
    aspect-ratio: 16 / 6;
    width: 100%;
    list-style: none;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
    padding: 0rem 2rem;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 50%;
        width: 25%;
        background-color: ${(props) => props.theme.colors.accent};
        transform-origin: center;
        transform: rotate(45deg) translate(90%);
        z-index: 0;
    }

    & p {
        z-index: 1;
        position: relative;
        text-align: left;
        padding: 2rem;
    }
`

type Props = {

}
 
const MissionTile: React.FC<Props> = ({children}) => {
    return (
        <MISSIONTILE>
            <p>
                {children}
            </p>
        </MISSIONTILE>
    );
}
 
export default MissionTile;