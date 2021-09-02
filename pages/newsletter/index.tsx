// UTILS
import React, { Fragment } from "react";
import styled from "styled-components";
import { client } from "../../api/sanity";

// TYPES
import { Newsletter } from "../../types/Newsletter"

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import NewsletterTile from "../../components/newsletter/NewsletterTile";

const NEWSLETTERPAGEWRAPPER = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`

const NEWSLETTERLIST = styled.ul`
    display: flex;
    list-style: none;
`

export async function getStaticProps() {
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
        revalidate: 1,
    };
}

export interface Props {
    newsletters: Array<Newsletter>;
}

const Home: React.FC<Props> = ({ newsletters }) => {
    return (
        <DefaultLayout>
            <NEWSLETTERPAGEWRAPPER>
                <NEWSLETTERLIST>
                    {newsletters.map((newsletter) => (
                        <NewsletterTile key={newsletter.id} newsletter={newsletter} />
                    ))}
                </NEWSLETTERLIST>
            </NEWSLETTERPAGEWRAPPER>
        </DefaultLayout>
    )
};

export default Home;
