import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

// how to programatically navigate to slicemasters, replace true adds it to browser history
// function goToSlicers() {
//     setTimeout(() => {
//         navigate('/slicemasters', { replace: true })
//     }, 2000);
// }

// need to fix anchortag fs at small screen

const NavStyles = styled.nav`
    margin-bottom: 3rem;
    .logo {
        transform: translateY(-25%);
    }
    ul {
        margin: 0;
        padding: 0;
        text-align: center;
        list-style: none;
        margin-left: -.75em;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        margin-top: -6rem;
    }
    li {
        --rotate: -2deg;
        transform: rotate(var(--rotate));
        order: 1;
        &:nth-child(1) {
            --rotate: 1deg;
        }
        &:nth-child(2) {
            --rotate: -2.5deg;
        }
        &:nth-child(4) {
            --rotate: 4deg;
        }
        &:hover {
            --rotate: 3deg;
        }
    }
    @media (min-width: 600px) {
        a {
            font-size: 2rem;
            text-decoration: none;
            &:hover {
                color: var(--red);
            }
    }
    a {
        font-size: 3rem;
        // current page
    //   &[aria-current="page"]  {
    //       color: var(--red);
    //   }
    }
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li><Link to="/">Hot Now</Link></li>
                <li><Link to="/pizzas">Pizza Menu</Link></li>
                <li><Link to="/"><Logo /></Link></li>
                <li><Link to="/slicemasters">slice<br/>masters</Link></li>
                <li><Link to="/order">Order Ahead</Link></li>
                {/* <li><a href="/beers">Beers</a></li> */}
                {/* <li>
                    <button type="button" onClick={goToSlicers}>
                        go to slicers after 2 sec
                    </button>
                </li> */}
            </ul>
        </NavStyles>
    )
}
