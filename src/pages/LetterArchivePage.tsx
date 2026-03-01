import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { getNewsletterYears, getNewslettersOfYear } from "../../api/sanity";

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
    background-image: url("https://res.cloudinary.com/spencercv7-dev/image/upload/v1632858041/VenablePark/2k-rotated-sean_zlsg8z.webp");
    background-size: cover;
    background-position: center;

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

const breathAnimation = keyframes`
    0% { opacity: 0.2; }
    50% { opacity: 0.5; }
    100% { opacity: 0.2; }
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

const LetterArchivePage: React.FC = () => {
    const [newsletters, setNewsletters] = useState<Array<Newsletter>>([]);
    const [newsletterYears, setNewsletterYears] = useState<Array<string>>([]);
    const [isLoadedCount, setIsLoadedCount] = useState<number>(0);
    const [isListLoaded, setIsListLoaded] = useState<boolean>(false);
    const [currentlyLoadedYear, setCurrentlyLoadedYear] = useState<string>("");
    const [currentNewsletters, setCurrentNewsletters] = useState<Newsletter[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const years: string[] = await getNewsletterYears();
                const initialNewsletters = await getNewslettersOfYear(years[0]);
                
                setNewsletterYears(years);
                setNewsletters(initialNewsletters.newsletters);
                setCurrentNewsletters(initialNewsletters.newsletters);
                setCurrentlyLoadedYear(years[0]);
            } catch (error) {
                console.error('Error fetching newsletter data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleNewsletterLoad = (): void => {
        setIsLoadedCount(isLoadedCount + 1);
    };

    const handleSearchSubmit = (value: string): void => {
        if (value !== currentlyLoadedYear) {
            if (
                Number(value) >= Number(newsletterYears.at(-1)) &&
                Number(value) <= Number(newsletterYears[0])
            ) {
                setIsLoadedCount(0);
                setIsListLoaded(false);
                getNewslettersOfYear(value).then((res) => {
                    if (res.newsletters.length === 0) {
                        setIsListLoaded(true);
                    } else {
                        setCurrentNewsletters(res.newsletters);
                        setCurrentlyLoadedYear(value);
                    }
                });
            } else {
                setCurrentlyLoadedYear(value);
                setCurrentNewsletters([]);
                setIsLoadedCount(0);
                setIsListLoaded(true);
            }
        }
    };

    useEffect(() => {
        if (isLoadedCount == currentNewsletters.length) {
            setIsListLoaded(true);
        }
    }, [isLoadedCount, currentNewsletters]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <NEWSLETTERPAGEWRAPPER>
            <BACKGROUNDIMAGEWRAPPER />
            <SearchBar
                newsletterYears={newsletterYears}
                handleSearchSubmit={handleSearchSubmit}
            />
            <LISTWRAPPER>
                {!isListLoaded && (
                    <LOADINGNEWSLETTERLIST>
                        {currentNewsletters.map((newsletter, index) => (
                            <LoadingNewsletterTile key={index} />
                        ))}
                    </LOADINGNEWSLETTERLIST>
                )}
                <NEWSLETTERLIST isListLoaded={isListLoaded}>
                    {currentNewsletters.length == 0 ? (
                        <ERROR>
                            Unable to find any newsletters that match your
                            search...
                        </ERROR>
                    ) : (
                        currentNewsletters.map((newsletter, index) => (
                            <NewsletterTile
                                key={newsletter.id}
                                newsletter={newsletter}
                                isMostRecent={
                                    newsletterYears[0] ==
                                    newsletter.date_published
                                        ? true
                                        : false
                                }
                                handleNewsletterLoad={handleNewsletterLoad}
                            />
                        ))
                    )}
                </NEWSLETTERLIST>
            </LISTWRAPPER>
        </NEWSLETTERPAGEWRAPPER>
    );
};

export default LetterArchivePage;