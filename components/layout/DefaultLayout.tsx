import styled from "styled-components";
import Image from "next/image";

const DEFAULTLAYOUT = styled.div`
    display: grid;
    align-content: center;
    min-height: 100vh;
    position: relative;
`

const CONTENTWRAPPER = styled.div`
    min-height: 90vh;
    padding: max(5%, 10rem) max(5%, 1rem);

    clip-path: polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%);
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

const STYLEDIMAGE = styled(Image)`
    object-fit: cover;
    position: absolute;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

export interface Props {

}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <DEFAULTLAYOUT>
            <STYLEDIMAGE
                src="/images/2k-rotated-sean.webp"
                sizes="100%"
                layout="fill"
            />
            <CONTENTWRAPPER>
                { children }
            </CONTENTWRAPPER>
        </DEFAULTLAYOUT>
    );
};

export default DefaultLayout;
