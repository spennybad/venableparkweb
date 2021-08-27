// UTILS
import styled from "styled-components";

// COMPONENTS
import { H2 } from "../../styles/typography";
import CarouselWrapper from "../comps/CarouselWrapper";
import { CONTENTWRAPPER } from "../../styles/contentWrapper";


// TYPES
import { Testimonial } from "../../types/Testimonial";

const TESTIMONIALSWRAPPER = styled.div`
    margin-block: 10%;
    display: grid;
    gap: 5rem;
`;

const TESTIMONIALH2 = styled(H2)`
    margin-left: 10%;
`

export interface Props {
    testimonials: Array<Testimonial>;
}

const Testimonials: React.FC<Props> = ({ testimonials }) => {
    return (
        <TESTIMONIALSWRAPPER>
            <TESTIMONIALH2>Testimonials</TESTIMONIALH2>
            <CarouselWrapper data={testimonials} />
        </TESTIMONIALSWRAPPER>
    );
};

export default Testimonials;
