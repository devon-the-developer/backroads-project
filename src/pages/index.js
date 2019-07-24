import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About.jsx'
import Services from '../components/Home/Services.jsx'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'

export default ({data}) => (
    <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
            <Banner title='continue exploring' info='Some info about the website that should be Lorem. Eius, officius'>
                <Link to='/tours' className='btn-white'>
                    Explore Tours
                </Link>
            </Banner>
        </StyledHero>
        <About />
        <Services />
    </Layout>
)

export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp {
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`