import React from 'react';
import { Link, navigate } from 'gatsby';

// how to programatically navigate to slicemasters, replace true adds it to browser history
// function goToSlicers() {
//     setTimeout(() => {
//         navigate('/slicemasters', { replace: true })
//     }, 2000);
// }

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Hot Now</Link></li>
                <li><Link to="/pizzas">Pizza Menu</Link></li>
                <li><Link to="/">Logo</Link></li>
                <li><Link to="/slicemasters">slicemasters</Link></li>
                <li><Link to="/order">Order Ahead</Link></li>
                <li><a href="/beers">Beers</a></li>
                {/* <li>
                    <button type="button" onClick={goToSlicers}>
                        go to slicers after 2 sec
                    </button>
                </li> */}
            </ul>
        </nav>
    )
}
