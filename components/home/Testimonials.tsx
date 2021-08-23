// UTILS
import styled from "styled-components";

// COMPONENTS
import { H2 } from "../../styles/typography";
import CarouselWrapper from "../comps/CarouselWrapper";

// TYPES
import { Testimonial } from "../../types/Testimonial";

const TESTIMONIALSWRAPPER = styled.div`
   margin-bottom: 5rem;
`;

const TESTIMONIALH2 = styled(H2)`
    padding-inline: 10%;
    margin-bottom: 5rem;
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
