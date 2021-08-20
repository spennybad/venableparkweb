// UTILS
import styled from 'styled-components';
import Image from 'next/image';

// TYPES
import { Employee } from '../../types/Employee';

const HEADSHOTWRAPPER = styled.div<{dimension: string}>`
    position: relative;
    justify-self: center;
    align-self: center;
    height: ${(props) => props.dimension};
    width: ${(props) => props.dimension};
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


export interface Props {
    employeeData: Employee,
    dimension: string
}

const HeadshotWrapper: React.FC<Props> = ({ employeeData, dimension }) => {
    return (
        <HEADSHOTWRAPPER dimension={ dimension }>
            {employeeData.employee.employee_photo ? (
                <Image
                    src={employeeData.employee.employee_photo}
                    alt={employeeData.employee.name}
                    layout="fill"
                    objectFit="contain"
                ></Image>
            ) : (
                <PLACEHOLDER />
            )}
        </HEADSHOTWRAPPER>
    );
};

export default HeadshotWrapper;
