import styled from "styled-components";
import Image from "next/image";
import media from "../../utils/MediaQueries";

const FOOTER = styled.footer`
    position: relative;

    height: 12rem;
    width: 100%;

    background-color: ${(props) => props.theme.colors.white};
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    font-size: ${(props) => props.theme.fontSize.p};
    
    align-items: center;

    ${media.width_700`
        grid-template-columns: 100%;
        grid-template-rows: repeat(3, 1fr);
        text-align: center;
        gap: 2rem; 
        margin-block: 1rem;
    `}
`;

const LOGOWRAPPER = styled.div`
    position: relative;
    height: 30%;
    background-color: ${(props) => props.theme.colors.white};

    ${media.width_700`
        height: 3rem;
        width: 10rem;
        place-self: center;
    `}
`;

const MAILINGADDRESS = styled.address`
    font-style: normal;
    place-self: center;
    
    & a {

    }
`

const CONTACTNUMBERS = styled.div`
    place-self: center;
`

const Footer: React.FC = () => {
    return (
        <FOOTER>
            <LOGOWRAPPER>
                <Image src="/images/logo/logo.svg" alt="logo" layout="fill" />
            </LOGOWRAPPER>
            <MAILINGADDRESS>
                <a href="https://maps.google.com/maps?ll=44.3911341,-79.6898517&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=PT&amp;mapclient=embed&amp;daddr=33 Clapperton Street , Barrie  L4M 3E6, CA@44.3911341,-79.6898517" target="_blank">
                    33 Clapperton St.<br /> Barrie ON L4M 3E6
                </a>
            </MAILINGADDRESS>
            <CONTACTNUMBERS>
                <p>Telephone: <a href="tel:(705) 792-3991">(705) 792-3991</a></p>
                <p>Toll Free: <a href="tel:(866) 792-3991">(866) 792-3991</a></p>
                <p>Fax: <a href="fax:(705) 792-3992">(866) 792-3991</a></p>
            </CONTACTNUMBERS>
        </FOOTER>
    );
};

export default Footer;


