import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

// can be passed to every page with gatsby-browser.js
// children are whatever is in the child component
export default function Layout({children}) {
    return (
        <div>
            <Nav />
            {children}
            <p>i am Layout component content</p>
            <Footer />
        </div>
    )
}
