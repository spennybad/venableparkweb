import { ReactElement } from "react";
import styled from "styled-components";

const Section = styled.section`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    /* background-color: ${({ theme }) => theme.colors.white}; */
`

export interface PageWrapperProps {

}
 
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <Section>
            {children}
        </Section>
    );
}
 
export default PageWrapper;