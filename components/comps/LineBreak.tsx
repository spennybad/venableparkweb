import styled from "styled-components";

export const LINEBREAK = styled.div`
    width:100%;
    height: 2px;
    padding-inline: 10%;
    height: 0.1rem;
    justify-self: center;
    
    display: flex;
    justify-content: center;

    & > div {
        height: 100%;
        width: 80%;
        background-color: ${(props) => props.theme.colors.blackTrans75};
    }
`;

export interface Props {
  
}
 
const LineBreak: React.FC<Props> = () => {
    return (
        <LINEBREAK>
            <div/>
        </LINEBREAK>
    );
}
 
export default LineBreak;