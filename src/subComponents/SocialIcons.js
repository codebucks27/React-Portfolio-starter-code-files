import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, LinkedIn, Twitter } from '../components/AllSvgs';
import { DarkTheme } from '../components/Themes'

const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:fixed;
bottom:0;
left:2rem;
z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled.span`
width:2px;
height:8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`
const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/morgana-coder" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.facebook.com/profile.php?id=100065890201440" }}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://twitter.com/JanviJa69521404" }}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.linkedin.com/in/janvi-jain-aa4921203/" }}>
                    <LinkedIn width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <Line color={props.theme}/>
        </Icons>
    );
}

export default SocialIcons;