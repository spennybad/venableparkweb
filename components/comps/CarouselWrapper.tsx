// UTILS
import "react-multi-carousel/lib/styles.css";

// COMPONENTS
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem"

// TYPES
import { Testimonial } from "../../types/Testimonial";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 800 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      }
};

export interface Props {
    data: Array<Testimonial>
}
 
const CarouselWrapper: React.FC<Props> = ({ data }) => {
    return (
        <Carousel
            responsive={responsive}
            itemClass="carousel_item"
            infinite={true}
            partialVisible={true}
            focusOnSelect={true}
            arrows={false}
        >
            {data.map((record) => {
                return (
                    <CarouselItem key={record.id} data={ record }/>
                )
            })}
        </Carousel>
    );
}
 
export default CarouselWrapper;
