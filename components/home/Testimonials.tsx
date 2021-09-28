// UTILS
import styled from "styled-components";
import Image from "next/image";

// COMPONENTS
import { H2 } from "../../styles/typography";
import CarouselWrapper from "../comps/CarouselWrapper";


// TYPES
import { Testimonial } from "../../types/Testimonial";

const TESTIMONIALSWRAPPER = styled.div`
    display: grid;
    gap: 2.5rem;
    background-color: ${(props) => props.theme.colors.accent};
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
    padding-block: 5%;
    position: relative;
`;

const STYLEDIMAGE = styled(Image)`
    object-fit: cover;
    position: absolute;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

const BACKGROUNDIMAGEWARPPER = styled.div`
        &::after {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: ${(props) => props.theme.colors.blackTrans50};
    }
`

const TESTIMONIALH2 = styled(H2)`
    z-index: 1;
    color: ${(props) => props.theme.colors.white};
    margin-left: 10%;
`

export interface Props {
    testimonials: Array<Testimonial>;
}

const Testimonials: React.FC<Props> = ({ testimonials }) => {
    return (
        <TESTIMONIALSWRAPPER>
            <BACKGROUNDIMAGEWARPPER>
                <STYLEDIMAGE
                    src={"https://res.cloudinary.com/spencercv7-dev/image/upload/v1632858041/VenablePark/2k-rotated-sean_zlsg8z.webp"}
                    sizes="100%"
                    layout="fill"
                />
            </BACKGROUNDIMAGEWARPPER>
            <TESTIMONIALH2>Testimonials</TESTIMONIALH2>
            <CarouselWrapper data={testimonials} />
        </TESTIMONIALSWRAPPER>
    );
};

export default Testimonials;
