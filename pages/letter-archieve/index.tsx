// UTILS
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { client } from "../../api/sanity";
import Image from "next/image";

// TYPES
import { Newsletter } from "../../types/Newsletter";
import { SearchFilters } from "../../types/SearchFilters";

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

const NEWSLETTERLIST = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    gap: 4rem;
`;

const STYLEDIMAGE = styled(Image)`
    object-fit: cover;
    position: fixed;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

export async function getServerSideProps() {
    const newsletters = await client.fetch(`
        *[_type == "newsletter"] {
            "date_published": date_published,
            "file": file.asset -> url,
            "title": title,
            "id": _id
        }
    `);

    return {
        props: {
            newsletters,
        },
    };
}

export interface Props {
    newsletters: Array<Newsletter>;
}

// USED TO FILTER OUT ALL NEWSLETTERS THAT DO NOT SET THE USER SET SEARCH CRITERIA.
function filterNewsletters(
    newsletters: Array<Newsletter>,
    searchFilters: SearchFilters
): Array<Newsletter> {
    if (!searchFilters.date && !searchFilters.keyWord) {
        return newsletters.splice(0, 10);
    }
    return newsletters.filter(
        (newsletter) =>
            Number(newsletter.date_published.split("-")[0]) ==
            searchFilters.date
    );
}

const Home: React.FC<Props> = ({ newsletters }) => {

    console.log(newsletters);
    const [isLoadedCount, setIsLoadedCount] = useState<number>(0);

    // STATE OF CURRENTLY DISPLAYED NEWSLETTERS. INITIALLY 10 NEWSLETTERS DISPLAYED.
    const [filteredNewsletters, setFilteredNewsletters] = useState<
        Newsletter[]
    >(newsletters.slice(0, 10));

    // STATE OF CURRENTLY SET SEACH FILTERS.
    const [searchFilters, setSearchFilters] = useState<SearchFilters>({
        keyWord: null,
        sortBy: "newest",
        date: 2020,
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
        setFilteredNewsletters(filterNewsletters(newsletters, searchFilters));
    };

    // HERE FOR DEBUGGING PURPOSES
    useEffect(() => {
        console.log(isLoadedCount);
    }, [isLoadedCount]);

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
            <NEWSLETTERLIST>
                {filteredNewsletters.map((newsletter, index) => (
                    <NewsletterTile
                        key={newsletter.id}
                        newsletter={newsletter}
                        isMostRecent={index == 0 ? true : false}
                        handleNewsletterLoad={handleNewsletterLoad}
                    />
                ))}
            </NEWSLETTERLIST>
        </NEWSLETTERPAGEWRAPPER>
    );
};

export default Home;
