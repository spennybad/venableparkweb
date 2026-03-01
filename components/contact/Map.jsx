// UTILS
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// MAP SPECIFIC IMPORTS
import GoogleMapReact from 'google-map-react';

const MAPWRAPPER = styled.div`
    height: 80%;
    width: 80%;
    place-self: center;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};

    ${media.width_700`
        display: none;
    `}
`

const MARKER = styled.div`
    & div {
        height: 2.5rem;
        width: 2.5rem;

        border-radius: 100%;

        background-color: ${(props) => props.theme.colors.primary};
        
        transform: translate(-50%, -50%);
        transform-origin: bottom;

        & ::after {
            content: "";

            height: 1.5rem;
            width: 1.5rem;

            background-color: ${(props) => props.theme.colors.primary};
            transform: translate(-50%, 75%) rotate(-45deg);
            position: absolute;

            top: 0;
            left: 50%;

        }
    }
`

const Marker = () => {
    return ( 
        <MARKER>
            <div />
        </MARKER>
    );
}

const Map = () => {

    const defaultProps = {
        center: {
            lat: 44.391060,
            lng: -79.689921
        },
        zoom: 15
    }; 

    return (
        <MAPWRAPPER>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" + process.env.NEXT_PUBLIC_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={ defaultProps.center.lat }
                    lng={ defaultProps.center.lng }
                />
            </GoogleMapReact>
        </MAPWRAPPER>
    );
};

export default Map;