import styled from "styled-components";
import Image from "next/image";

const FOOTER = styled.footer`
    min-height: 6rem;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: center;
    border-top: solid 1px ${(props) => props.theme.colors.black};
`;

const LOGOWRAPPER = styled.div`
    position: relative;
    width: 10rem;
    height: auto;
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
