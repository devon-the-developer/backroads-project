import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About.jsx'
import Services from '../components/Home/Services.jsx'

export default () => (
    <Layout>
        <SimpleHero>
            <Banner title='continue exploring' info='Some info about the website that should be Lorem. Eius, officius'>
                <Link to='/tours' className='btn-white'>
                    Explore Tours
                </Link>
            </Banner>
        </SimpleHero>
        <About />
        <Services />
    </Layout>
)
