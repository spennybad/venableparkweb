// UTILS
import styled from "styled-components";
// TYPES
import { Employee } from "../../types/Employee";

// COMPONENTS
import HeadshotWrapper from "./HeadshotWrapper";
import NameTag from "./NameTag";

const TEAMTILE = styled.li`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
`;

export interface Props {
    employeeData: Employee;
    handleTileClick: (event: Employee) => void;
}

const TeamTile: React.FC<Props> = ({ employeeData, handleTileClick }) => {
    return (
        <TEAMTILE onClick={() => handleTileClick(employeeData)}>
            <HeadshotWrapper
                employeeData={employeeData}
                dimension={"clamp(10rem, 10vw, 16rem)"}
            />
            <NameTag employeeData={employeeData} modal={false}/>
        </TEAMTILE>
    );
};

export default TeamTile;
