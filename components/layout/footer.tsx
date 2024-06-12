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

  box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};

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
`;

const LOGOWRAPPER = styled.div`
  position: relative;
  width: 15rem;

  ${media.width_700`
        width: 13rem;
    `}
`;

const CONTACTNUMBERS = styled.div`
  place-self: center;
  text-align: right;

  & a {
    text-decoration: none;
  }
`;

const Footer: React.FC = () => {
  return (
    <FOOTER>
      <MAILINGADDRESS>
         Barrie, ON 
      </MAILINGADDRESS>
      <LOGOWRAPPER>
        <Image
          src="/images/logo/logo_solid.svg"
          alt="footer logo"
          layout="fill"
        />
      </LOGOWRAPPER>
      <CONTACTNUMBERS>
        <p>
          Telephone: <a href="tel:(705) 792-3991">(705) 792-3991</a>
        </p>
        <p>
          Toll Free: <a href="tel:(866) 792-3991">(866) 792-3991</a>
        </p>
      </CONTACTNUMBERS>
    </FOOTER>
  );
};

export default Footer;
