import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../images/connectBcg.jpeg'
import Img from 'gatsby-image'

const getImages = graphql`
{
  fixed:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fixed(width:200,height:300, grayscale: true){
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid:file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const Images = () => {
    const {fixed, fluid} = useStaticQuery(getImages)
    return (
        <Wrapper>
            <article>
                <h3>Basic Image</h3>
                <img src={img} className="basic" alt="basic" />
            </article>
            <article>
                <h3>Fixed image/blur</h3>
                <Img fixed={fixed.childImageSharp.fixed} alt=" fixed gatsby"/>
            </article>
            <article>
                <h3>Fluid image/svg</h3>
                <Img fluid={fluid.childImageSharp.fluid}/>
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    text-transform: capitalize;
    width: 80vw;
    margin: 0 auto 10rem auto;
    article{
        border: 3px solid red;
        padding: 1rem 0;
    }
    .basic{
        width: 100%;
    }
    @media (min-width:992px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
    }
`

export default Images
