// UTILS
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// TYPES
import { Testimonial } from "../../types/Testimonial";

const CAROUSELITEM = styled.div`    
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};

    padding: clamp(3rem, 10%, 8rem);

    display: grid;
    align-items: center;

    & ::before {
        content: "";
        background-color: ${(props) => props.theme.colors.accent};

        position: absolute;
        top: 0;
        left: 0;

        height: 10%;
        aspect-ratio: 1 / 1;

        margin: 2rem;

        clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
    }

    & ::after {
        content: "";
        background-color: ${(props) => props.theme.colors.accent};

        position: absolute;
        bottom: 0;
        right: 0;

        height: 10%;
        aspect-ratio: 1 / 1;

        margin: 2rem;

        clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);
    }
`

const CARDTAG = styled.span`
    font-size: ${(props) => props.theme.fontSize.p};
    justify-self: end;
    text-align: right;
`

const INITIALS = styled.p`
    color: ${(props) => props.theme.colors.primary};
`

const DATEJOINED = styled.p`
    color: ${(props) => props.theme.colors.blackTrans75};
`

const BODY = styled.p`
    font-size: ${(props) => props.theme.fontSize.p};
`

export interface Props {
    data: Testimonial
}
 
const CarouselItem: React.FC<Props> = ({ data }) => {
    return (
        <CAROUSELITEM>
            <BODY>
                &quot;{data.text}&quot;
            </BODY>
            <CARDTAG>
                <INITIALS>
                    - {data.initials}
                </INITIALS>
                <DATEJOINED>
                    Joined: {data.year_joined}
                </DATEJOINED>
            </CARDTAG>
        </CAROUSELITEM>
    );
}
 
export default CarouselItem;