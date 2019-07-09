import React from 'react'

import './layout.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({children}) {
    return (
        <React.Fragment>
            <Navbar />
            {children}
            <Footer />
        </React.Fragment>
    )
}
