// UTILS
import React, { useState } from "react";
import styled from "styled-components";
import { client } from "../../api/sanity";
import Image from "next/image";

// TYPES
import { Newsletter } from "../../types/Newsletter";
import { SearchFilters } from "../../types/SearchFilters";

// COMPS
import NewsletterTile from "../../components/newsletter/NewsletterTile";
import SearchBar from "../../components/newsletter/SearchBar";

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
        background-color: ${(props) => props.theme.colors.blackTrans50};
    }
`

const NEWSLETTERPAGEWRAPPER = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: grid;
`;


const NEWSLETTERLIST = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    gap: 4rem;
    margin: 3rem;
`;

const STYLEDIMAGE = styled(Image)`
    object-fit: cover;
    position: fixed;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

export async function getStaticProps() {
    const newsletters = await client.fetch(`
        *[_type == "newsletter"] {
            "date_published": date_published,
            "file": file.asset -> url,
            "title": title,
            "id": _id
        } [0...10] | order(date_published desc)
    `);

    return {
        props: {
            newsletters,
        },
        revalidate: 1,
    };
}

export interface Props {
    newsletters: Array<Newsletter>;
}

const Home: React.FC<Props> = ({ newsletters }) => {
    const [searchFilters, setSearchFilters] = useState<null | SearchFilters>(null);
    return (
        <>
            <BACKGROUNDIMAGEWRAPPER>
                <STYLEDIMAGE
                    src="/images/2k-rotated-sean.webp"
                    sizes="100%"
                    layout="fill"
                />
            </BACKGROUNDIMAGEWRAPPER>
            <NEWSLETTERPAGEWRAPPER>
                <SearchBar setSearchFilters={ setSearchFilters }/>
                <NEWSLETTERLIST>
                    {newsletters.map((newsletter, index) => (
                        <NewsletterTile
                            key={newsletter.id}
                            newsletter={newsletter}
                            isMostRecent={index == 0 ? true : false}
                        />
                    ))}
                </NEWSLETTERLIST>
            </NEWSLETTERPAGEWRAPPER>
        </>
    );
};

export default Home;
