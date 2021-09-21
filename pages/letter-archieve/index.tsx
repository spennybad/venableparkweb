// UTILS
import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { client } from "../../api/sanity";
import Image from "next/image";

// TYPES
import { Newsletter } from "../../types/Newsletter";
import { SearchFilters } from "../../types/SearchFilters";

// COMPS
import NewsletterTile from "../../components/newsletter/NewsletterTile";
import SearchBar from "../../components/newsletter/SearchBar";
import { H2 } from "../../styles/typography";

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
    height: 100vh;
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
    height: 100%;
    width: 100%;
    z-index: 2;
    gap: 4rem;
    justify-content: center;
`

const ERROR = styled.p`
    font-size: ${(props) => props.theme.fontSize.p};
    color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    text-align: center;
`

export async function getStaticProps() {
    const newsletters = await client.fetch(`
        *[_type == "newsletter"] {
            "date_published": date_published,
            "file": file.asset -> url,
            "title": title,
            "id": _id
        } | order(date_published desc)
    `);

    return {
        props: {
            newsletters,
        },
    };
}

function getIntersection(a: any[], b: any[]): any[] {
    let overlap: any[] = [];
    for (const itemA of a) {
        for (const itemB of b) {
            if (itemA == itemB) {
                overlap.push(itemA);
            }
        }
    }
    return overlap;
}

// USED TO FILTER OUT ALL NEWSLETTERS THAT DO NOT SET THE USER SET SEARCH CRITERIA.
function filterNewsletters(
    newsletters: Array<Newsletter>,
    searchFilters: SearchFilters
): Array<Newsletter> {

    if (!searchFilters.date && !searchFilters.keyWord) {
        return newsletters.slice(0, 10);
    }

    const filtered = newsletters.filter(
        (newsletter) =>
            Number(newsletter.date_published.split("-")[0]) ==
            searchFilters.date
    );

    return filtered;
}


function splitDate(date: string, character: string): string[] {
    return date.split(character);
}

export interface Props {
    newsletters: Array<Newsletter>;
}

const Home: React.FC<Props> = ({ newsletters }) => {

    const [isLoadedCount, setIsLoadedCount] = useState<number>(0);
    const [isListLoaded, setIsListLoaded] = useState<boolean>(false);

    const mostRecent = newsletters[0].date_published;

    // STATE OF CURRENTLY DISPLAYED NEWSLETTERS. INITIALLY 10 NEWSLETTERS DISPLAYED.
    const [filteredNewsletters, setFilteredNewsletters] = useState<
        Newsletter[]
    >(newsletters.slice(0, 12));

    // STATE OF CURRENTLY SET SEACH FILTERS.
    const [searchFilters, setSearchFilters] = useState<SearchFilters>({
        keyWord: null,
        sortBy: "newest",
        date: 2021,
    });

    // UPDATED EACH TIME A NEWSLETTER IS SUCCESSFULLY LOADED.
    const handleNewsletterLoad = (): void => {
        setIsLoadedCount(isLoadedCount + 1);
    };

    // REDUNDENT STEP FOR FUTURE PROFFING
    const updateSearchFilters = (newFilters: SearchFilters): void => {
        setSearchFilters(newFilters);
    };

    const handleSearchSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ): void => {
        event.preventDefault();
        let newFilteredNewsletters = filterNewsletters(newsletters, searchFilters);
        setIsLoadedCount(getIntersection(newFilteredNewsletters, filteredNewsletters).length);
        setIsListLoaded(false);
        setFilteredNewsletters(newFilteredNewsletters);
    };

    // MANAGES THE HIDING OF LOADING SCREEN FOR NEWSLETTERS
    useEffect(() => {
        if (isLoadedCount == filteredNewsletters.length) {
            setIsListLoaded(true);
        }
    }, [isLoadedCount, filteredNewsletters]);

    return (
        <NEWSLETTERPAGEWRAPPER>
            <BACKGROUNDIMAGEWRAPPER>
                <STYLEDIMAGE
                    src="/images/2k-rotated-sean.webp"
                    sizes="100%"
                    layout="fill"
                />
            </BACKGROUNDIMAGEWRAPPER>
            <SearchBar
                updateSearchFilters={updateSearchFilters}
                searchFilters={searchFilters}
                handleSearchSubmit={handleSearchSubmit}
            />
            <LISTWRAPPER>
                {!isListLoaded &&
                    <LOADINGNEWSLETTERLIST>
                        {filteredNewsletters.map(( newsletter, index ) => (
                            <LoadingNewsletterTile key={index} />
                        ))}
                    </LOADINGNEWSLETTERLIST>
                }
                <NEWSLETTERLIST isListLoaded={isListLoaded}>
                    {
                        filteredNewsletters.length == 0 ?
                            <ERROR>
                                Unable to find any newsletters that match your seach...
                            </ERROR>   
                        :
                        filteredNewsletters.map((newsletter, index) => (
                            <NewsletterTile
                                key={newsletter.id}
                                newsletter={newsletter}
                                isMostRecent={mostRecent == newsletter.date_published ? true : false}
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
    height: 400px;
    width: 300px;
    background-color: ${(props) => props.theme.colors.white};
    animation: ${breathAnimation} 2s infinite;
`

const LoadingNewsletterTile: React.FC<{}> = () => {
    return <NEWSLETTERTILETEMPLATE />
};


export default Home;
