// UTILS
import styled from "styled-components";
import Image from "next/image";
import media from "../../utils/MediaQueries";

// TYPES
import { Employee } from "../../types/Employee";

const TEAMTILE = styled.li`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
`;

const HEADSHOTWRAPPER = styled.div`
    position: relative;

    height: clamp(10rem, 14vw, 16rem);
    width: clamp(10rem, 14vw, 16rem);
    overflow: hidden;
    border-radius: 100%;
    background-color:#403B3B;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`

const PLACEHOLDER = styled.div`
    height: 100%;
    width: 100%;
    background-color: orangered;
`;

const TEXTWRAPPER = styled.div`
    display: flex;

    & div {
        font-size: ${(props) => props.theme.fontSize.p};
        font-weight: bold;
        display: flex;
        white-space: nowrap;

        & span {
            color: ${(props) => props.theme.colors.primary}
        }

        ${media.width_500`
            flex-direction: column;
            gap: 0 !important;
        `}
    }

    & :nth-child(2) {
        font-size: ${(props) => props.theme.fontSize.p};
        max-width: 50vw;
    }
`

export interface Props {
    employeeData: Employee;
    handleTileClick: (event: Employee) => void;
}

const TeamTile: React.FC<Props> = ({ employeeData, handleTileClick }) => {

    const qualString: string = employeeData.employee.qualifications.reduce((total, curr): string => {
            return total += (curr + " ");
    }, "")

    return (
        <TEAMTILE onClick={() => handleTileClick(employeeData)}>
            <HEADSHOTWRAPPER>
                {employeeData.employee.employee_photo ? (
                    <Image
                        src={ employeeData.employee.employee_photo }
                        alt={ employeeData.employee.name }
                        layout="fill"
                        objectFit="contain"
                    ></Image>
                ) : (
                    <PLACEHOLDER />
                )}
            </HEADSHOTWRAPPER>
            <TEXTWRAPPER>
                <div>
                    <p>{employeeData.employee.name}</p>
                    <p><span>{ qualString }</span></p>
                </div>
                <p>{ employeeData.employee.employee_position }</p>
            </TEXTWRAPPER>
        </TEAMTILE>
    );
};

export default TeamTile;
