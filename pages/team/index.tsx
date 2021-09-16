// TYPES
import { Employee } from "../../types/Employee";

// UTILS
import media from "../../utils/MediaQueries";
import { client } from "../../api/sanity";
import styled from "styled-components";
import { useState } from "react";

// COMPONENTS
import { H2 } from "../../styles/typography";
import TeamTile from "../../components/team/TeamTile";
import Modal from "../../components/team/Modal";
import DefaultLayout from "../../components/layout/DefaultLayout";

const TEAMWRAPPER = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    & div {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 1rem;
    }

    ${media.width_900`
        grid-template-columns: 1fr;
    `}
`;

const TEAMLIST = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;
`;

const parseEmployees = (
    data: Employee[]
): { employees: Employee[]; principles: Employee[] } => {
    const employees: Employee[] = [];
    const principles: Employee[] = [];

    data.forEach((current: Employee) => {
        if (current.isPrinciple) {
            principles.push(current);
        } else {
            employees.push(current);
        }
    });

    return { employees, principles };
};

export async function getStaticProps() {
    const employeesData = await client.fetch(`
        *[_type == "employee"] {
            ...,
            "photo": image.asset -> url
        }       
    `);

    return {
        props: {
            employeesData,
        },
        revalidate: 1,
    };
}

export interface TeamProps {
    employeesData: Array<Employee>;
}

const Team: React.FC<TeamProps> = ({ employeesData }) => {
    const { principles, employees } = parseEmployees(employeesData);

    const [currentModal, setCurrentModal] = useState<Employee | null>(null);

    const handleTileClick = (employee: Employee | null): void => {
        setCurrentModal(employee);
    };

    console.log(employeesData);

    return (
        <>
            {currentModal != null && (
                <Modal
                    handleTileClick={handleTileClick}
                    currentModal={currentModal}
                />
            )}
            <DefaultLayout>
                <TEAMWRAPPER>
                    <div>
                        <H2>Our Principles:</H2>
                        <TEAMLIST>
                            {principles.map((employeeData) => (
                                <TeamTile
                                    key={employeeData._id}
                                    employeeData={employeeData}
                                    handleTileClick={handleTileClick}
                                />
                            ))}
                        </TEAMLIST>
                    </div>
                    <div>
                        <H2>Our Team:</H2>
                        <TEAMLIST>
                            {employees.map((employeeData) => (
                                <TeamTile
                                    key={employeeData._id}
                                    employeeData={employeeData}
                                    handleTileClick={handleTileClick}
                                />
                            ))}
                        </TEAMLIST>
                    </div>
                </TEAMWRAPPER>
            </DefaultLayout>
        </>
    );
};

export default Team;
