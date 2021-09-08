import styled from "styled-components";
import Image from "next/image";

const FOOTER = styled.footer`
    position: relative;

    height: 10rem;
    width: 100%;

    background-color: ${(props) => props.theme.colors.white};
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const LOGOWRAPPER = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    

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

         
