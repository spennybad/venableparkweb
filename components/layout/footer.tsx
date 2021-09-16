import styled from "styled-components";
import Image from "next/image";
import media from "../../utils/MediaQueries";

const FOOTER = styled.footer`
    position: relative;

    height: 14rem;
    width: 100%;

    background-color: ${(props) => props.theme.colors.white};
    display: grid;

    grid-template-columns: 1fr auto 1fr;

    justify-content: center;

    font-size: ${(props) => props.theme.fontSize.p};

    ${media.width_750`
        grid-template-rows: auto 1fr 1fr;
        grid-template-columns: auto;

        height: auto;

        padding-block: 3rem;
        gap: 1rem;

        & > * {
            text-align: center !important;
        }

        & :nth-child(2) {
            justify-self: center;
        }
    `}
`;


const MAILINGADDRESS = styled.address`
    font-style: normal;
    place-self: center;
    
    & a {
        text-decoration: none;
    }
`

const LOGOWRAPPER = styled.div`
    position: relative;
    width: 15rem;
`

const CONTACTNUMBERS = styled.div`
    place-self: center;
    text-align: right;

    & a {
        text-decoration: none;
    }
`

const Footer: React.FC = () => {
    return (
        <FOOTER>
            <MAILINGADDRESS>
                <a rel="noreferrer" href="https://maps.google.com/maps?ll=44.3911341,-79.6898517&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=PT&amp;mapclient=embed&amp;daddr=33 Clapperton Street , Barrie  L4M 3E6, CA@44.3911341,-79.6898517" target="_blank">
                    33 Clapperton St.<br /> Barrie ON L4M 3E6
                </a>
            </MAILINGADDRESS>
            <LOGOWRAPPER>
                <Image src="/images/logo/logo_solid.svg" alt="footer logo" layout="fill" />
            </LOGOWRAPPER>
            <CONTACTNUMBERS>
                <p>Telephone: <a href="tel:(705) 792-3991">(705) 792-3991</a></p>
                <p>Toll Free: <a href="tel:(866) 792-3991">(866) 792-3991</a></p>
                <p>Fax: <a href="fax:(705) 792-3992">(866) 792-3991</a></p>
            </CONTACTNUMBERS>
        </FOOTER>
    );
};

export default Footer;


