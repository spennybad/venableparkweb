import styled from "styled-components";
import Image from "next/image";

const FOOTER = styled.footer`
    min-height: min-content;
    height: 100%;
    width: 100%;
    display: flex;
    place-content: center;
    align-items: center;
`;

const LOGOWRAPPER = styled.div`
    position: relative;
    width: 10rem;
    height: 4rem;
    background-color: ${(props) => props.theme.colors.white};
`;

const Footer: React.FC = () => {
    return (
        <FOOTER>
            <LOGOWRAPPER>
                <Image src="/images/logo/logo.svg" alt="logo" layout="fill" />
            </LOGOWRAPPER>
        </FOOTER>
    );
};

export default Footer;
