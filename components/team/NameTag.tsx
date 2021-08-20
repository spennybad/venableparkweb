// UTILS
import styled, { css } from 'styled-components';
import media from '../../utils/MediaQueries';

// TYPES
import { Employee } from '../../types/Employee';

const NAMETAG = styled.div<{ modal: boolean }>`
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.theme.fontSize.p};

    & div {
        display: flex;
        gap: 1rem !important;
        white-space: nowrap;

        ${media.width_450`
            flex-direction: column;
            gap: 0rem !important;
        `}
    }
    
    &:nth-child(2) {
    }

`

const NAME = styled.p`
    font-weight: bold;
    display: flex;
    white-space: nowrap;
`

const QUALIFICATIONS = styled.p`
    color: ${(props) => props.theme.colors.primary};
`

export interface Props {
    employeeData: Employee,
    modal: boolean
}
 
const NameTag: React.FC<Props> = ({ employeeData, modal=false }) => {

    const qualString: string = employeeData.employee.qualifications.reduce(
        (total, curr): string => {
            return (total += curr + " ");
        },
        ""
    );

    return (
        <NAMETAG modal={modal}>
            <div><NAME>{employeeData.employee.name}</NAME><QUALIFICATIONS>{qualString}</QUALIFICATIONS></div>
            <p>{ employeeData.employee.employee_position }</p>
        </NAMETAG>
    );
}
 
export default NameTag;