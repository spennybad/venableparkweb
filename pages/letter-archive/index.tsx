// UTILS
import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { client, getMostRecentNewsletter, getNewslettersOfYear } from "../../api/sanity";
import Image from "next/image";

// TYPES
import { Newsletter } from "../../types/Newsletter";

// COMPS
import NewsletterTile from "../../components/newsletter/NewsletterTile";
import SearchBar from "../../components/newsletter/SearchBar";

const NEWSLETTERPAGEWRAPPER = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: grid;
    margin-block: 3rem;
    gap: 3rem;
    grid-template-rows: auto 1fr;
`;

const BACKGROUNDIMAGEWRAPPER = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: -1;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: ${(props) => props.theme.colors.blackTrans75};
    }
`;

const LISTWRAPPER = styled.div`
    position: relative;
`

const NEWSLETTERLIST = styled.ul<{isListLoaded: boolean}>`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    gap: 4rem;

    ${({ isListLoaded }) =>
        (!isListLoaded &&
        css`
            opacity: 0;
        `)
        ||
        (isListLoaded &&
        css`
            opacity: 1;
        `
        )
    }
`;

const STYLEDIMAGE = styled(Image)`
    object-fit: cover;
    position: fixed;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

const LOADINGNEWSLETTERLIST = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    gap: 4rem;
    justify-content: center;
    width: 100%;
`

const ERROR = styled.p`
    font-size: ${(props) => props.theme.fontSize.p};
    color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    text-align: center;
`

export async function getStaticProps() {

    const mostRecent = await getMostRecentNewsletter();

    const newsletters = await getNewslettersOfYear((mostRecent).mostRecentNewsletter.date_published);
    return {
        props: {
            newsletters: newsletters.newsletters,
            newestNewsletterDate: mostRecent.mostRecentNewsletter.date_published
        },
    };
}

export interface Props {
    newsletters: Array<Newsletter>,
    newestNewsletterDate: string
}

const Home: React.FC<Props> = ({ newsletters, newestNewsletterDate }) => {

    const [isLoadedCount, setIsLoadedCount] = useState<number>(0);
    const [isListLoaded, setIsListLoaded] = useState<boolean>(false);
    const [mostRecentDate, setMostRecentDate] = useState<string>(newestNewsletterDate);
    const [currentNewsletters, setCurrentNewsletters] = useState<
        Newsletter[]
    >(newsletters);

    // UPDATED EACH TIME A NEWSLETTER IS SUCCESSFULLY LOADED.
    const handleNewsletterLoad = (): void => {
        setIsLoadedCount(isLoadedCount + 1);
    };

    const handleSearchSubmit = (
        event: React.FormEvent<HTMLFormElement>,
        value: string
    ): void => {
        event.preventDefault();
        setIsLoadedCount(0);
        setIsListLoaded(false);
        getNewslettersOfYear(`${String(value)}-01-01`).then(res => {
            setCurrentNewsletters(res.newsletters);
        })
    };

    // MANAGES THE HIDING OF LOADING SCREEN FOR NEWSLETTERS
    useEffect(() => {
        if (isLoadedCount == currentNewsletters.length) {
            setIsListLoaded(true);
        }
    }, [isLoadedCount, currentNewsletters]);

    return (
        <NEWSLETTERPAGEWRAPPER>
            <BACKGROUNDIMAGEWRAPPER>
                <STYLEDIMAGE
                    src={"https://res.cloudinary.com/spencercv7-dev/image/upload/v1632858041/VenablePark/2k-rotated-sean_zlsg8z.webp"}
                    sizes="100%"
                    layout="fill"
                />
            </BACKGROUNDIMAGEWRAPPER>
            <SearchBar
                defaultValue={mostRecentDate}
                handleSearchSubmit={handleSearchSubmit}
            />
            <LISTWRAPPER>
                {!isListLoaded &&
                    <LOADINGNEWSLETTERLIST>
                        {currentNewsletters.map(( newsletter, index ) => (
                            <LoadingNewsletterTile key={index} />
                        ))}
                    </LOADINGNEWSLETTERLIST>
                }
                <NEWSLETTERLIST isListLoaded={isListLoaded}>
                    {
                        currentNewsletters.length == 0 ?
                            <ERROR>
                                Unable to find any newsletters that match your seach...
                            </ERROR>   
                        :
                        currentNewsletters.map((newsletter, index) => (
                            <NewsletterTile
                                key={newsletter.id}
                                newsletter={newsletter}
                                isMostRecent={mostRecentDate == newsletter.date_published ? true : false}
                                handleNewsletterLoad={handleNewsletterLoad}
                            />
                        ))
                    }
                </NEWSLETTERLIST>
            </LISTWRAPPER>

        </NEWSLETTERPAGEWRAPPER>
    );
};


const breathAnimation = keyframes`
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.5;
    }
    
    100% {
        opacity: 0.2;
    }
`

const NEWSLETTERTILETEMPLATE = styled.div`
    height: 350px;
    width: 250px;
    background-color: ${(props) => props.theme.colors.white};
    animation: ${breathAnimation} 2s infinite;
`

const LoadingNewsletterTile: React.FC<{}> = () => {
    return <NEWSLETTERTILETEMPLATE />
};

export default Home;
