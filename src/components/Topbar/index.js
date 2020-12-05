import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 1em 0;
    padding: 1em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Item = styled.a`
    ${
        props => props.active ?
        `background: -webkit-linear-gradient(#cb2d3e 0%, #ef473a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;` :
        `color: white;
        background: transparent;`
    }
    font-weight: 600;
    letter-spacing: 3;
    margin: 0 1.5em;
    margin-bottom: 0.5em;
`;

const Topbar = props => {
    return (
        <Wrapper>
            <Item active>Home</Item>
            <Item>Projects</Item>
            <Item>Experience</Item>
            <Item>Resume</Item>
        </Wrapper>
    );
};

export default Topbar;