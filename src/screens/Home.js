import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 1em;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em;
    word-wrap: normal;
`;

const Section = styled.div`
    text-align: center;
    width: 500px;
    margin: 0 1em;
    padding: 0 1em;
`;

const Heading = styled.h1`

`;

const Subwrapper = styled.div`
    background-color: rgba(100, 100, 100, 0.2);
    border-radius: 25px;
    drop-shadow: 0 0 5 rgba(10, 10, 10, 0.2);
    padding: 20px 25px;
`;

const Card = styled.div`

`;

const CardHeading = styled.h1`
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 1.5em;
`;

const CardSubheading = styled.h2`
    margin: 0;
    font-size: 1em;
    color: rgba(100, 100, 100, 1);
`;

const CardDescription = styled.p`
    margin: 0;
    font-size: 1.1em;
    text-align: justify;
    @media (max-width: 700px) {
        text-align: left;
    }
    padding: 0 1em;
`;

const CardTech = styled.section`

`;

const Emphasize = styled.span`
    background: -webkit-linear-gradient(${ props => props.gradient });
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
`;

const Home = props => {
    return (
        <Wrapper>
            <Section>
                <Heading>Projects</Heading>
                <Subwrapper>
                    <Card src="" path="">
                        <CardHeading src="">Marketing Tools</CardHeading>
                        <CardSubheading>08.2020 - ONGOING</CardSubheading>
                        <CardDescription>
                            <li>Created a variety of tools to provide me with the <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">best</Emphasize> regions to advertize certain products in via <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">scraping</Emphasize> census.gov and <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">calling</Emphasize> the google places api.</li>
                        </CardDescription>
                        <CardTech tech={["python", "postman"]}></CardTech>
                    </Card>

                    <Card src="" path="">
                        <CardHeading src="">Liveplay</CardHeading>
                        <CardSubheading>10.2020 - ONGOING</CardSubheading>
                        <CardDescription>
                            <li>Allow users to listen to music in <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">real-time</Emphasize> and chat with each other via <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">websockets</Emphasize>.</li>
                        </CardDescription>
                        <CardTech tech={["node", "express", "react"]}></CardTech>
                    </Card>

                    <Card src="" path="">
                        <CardHeading src="">Deals.me</CardHeading>
                        <CardSubheading>11.2020 - ONGOING</CardSubheading>
                        <CardDescription>
                            <li>Finds the <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">best</Emphasize> deals for any product across a growing list of sites via <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">api implementation</Emphasize>.</li>
                        </CardDescription>
                        <CardTech tech={["node", "express", "graphql", "apollo", "react"]}></CardTech>
                    </Card>

                    <Card src="" path="">
                        <CardHeading src="">Hermes</CardHeading>
                        <CardSubheading>01.2021 - ONGOING</CardSubheading>
                        <CardDescription>
                            <li>A <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">peer to peer</Emphasize> delivery platform also serving as a <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">decentralized</Emphasize> courier service.</li>
                        </CardDescription>
                        <CardTech tech={["node", "express", "graphql", "apollo", "react"]}></CardTech>
                    </Card>
                </Subwrapper>
            </Section>

            <Section>
                <Heading>Experience</Heading>
                <Subwrapper>
                    <Card>
                        <CardHeading src="">Gamely - Game Developer</CardHeading>
                        <CardSubheading>06.2017 - 12.2019</CardSubheading>
                        <CardDescription>
                            <li>Designed and implemented <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">over 15,000</Emphasize> lines of <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">modular</Emphasize> code.</li>
                            <li>Rewrote core components for various games clocking an average gameplay performance improvement of <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">~25%</Emphasize></li>
                        </CardDescription>
                        <CardTech tech={["lua"]}></CardTech>
                    </Card>

                    <Card>
                        <CardHeading src="">Index Labs - Software Engineer</CardHeading>
                        <CardSubheading>02.2020 - 07.2020</CardSubheading>
                        <CardDescription>
                                <li>Developed a proof-of-concept which brought traditional indexes to the cryptocurreny market utilizing <Emphasize gradient="#cb2d3e 0%, #ef473a 100%">blockchain technology</Emphasize>.</li>
                        </CardDescription>
                        <CardTech tech={["solidity", "ethereum", "react"]}></CardTech>
                    </Card>
                </Subwrapper>
            </Section>
        </Wrapper>
    );
};

export default Home;