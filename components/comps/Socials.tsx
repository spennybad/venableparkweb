import styled from "styled-components";
import Image from "next/image";

export const SOCIALS = styled.ul`
    position: absolute;
    top: 0%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin: 1rem;
    list-style: none;

    & > * a {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 1rem;
        padding: 1rem;
        background-color: ${(props) => props.theme.colors.blackTrans50};

        & > :first-child {
            filter: invert();
        }

        & p {
            font-size: ${(props) => props.theme.fontSize.p};
            color: ${(props) => props.theme.colors.white};
        }
    }
`;

export interface Props {

}

const Socials: React.FC<Props> = () => {
    return (
        <SOCIALS>
            <li>
                <a href={"https://twitter.com/kdaniellepark"}>
                    <Image
                        src={"/images/svgs/twitter-with-circle.svg"}
                        alt="Twitter Logo"
                        height="40"
                        width="40"
                    />
                    <p>
                        - Danielle
                    </p>
                </a>
            </li>
            <li>
                <a href={"https://twitter.com/CoryLVenable"}>
                    <Image
                        src={"/images/svgs/twitter-with-circle.svg"}
                        alt="Twitter Logo"
                        height="40"
                        width="40"
                    />
                    <p>
                        - Cory
                    </p>
                </a>
            </li>
        </SOCIALS>
    );
}

export default Socials;