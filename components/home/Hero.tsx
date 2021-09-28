import styled from "styled-components";
import Image from "next/image";
import media from "../../utils/MediaQueries"
import { H1 } from "../../styles/typography";
import Socials from "../comps/Socials";

const HeroWrapper = styled.div`
    height: 100vh;
    position: relative;
`;

const StyledImage = styled(Image)`
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 95vh, 0 100%);
`;

const HomeH1 = styled(H1)`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: 10%;
    font-weight: 300;

    color: ${(props) => props.theme.colors.white};

    & > * {
        display: block;
        /* background-color: ${(props) => props.theme.colors.whiteTrans75}; */
        width: max-content;
        padding: .5rem 1.5rem;
    }
    
    ${media.width_450`
        margin-right: 1rem;

    `}

    ${media.width_350`
        margin-right: .5rem;
    `}
`;

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
    return (
        <HeroWrapper>
            <StyledImage
                src="/images/2k-rotated-sean.webp"
                alt="Crashing waves on a shore."
                sizes="100%"
                layout="fill"
            />
            <Socials />
            <HomeH1><span>Venable Park Investment</span><span>Counsel Inc.</span></HomeH1>
        </HeroWrapper>
    );
};

export default Hero;
