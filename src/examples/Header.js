import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Header = () => {
    const {site: {siteMetadata}} = useStaticQuery(graphql`
    query FirstQuery{
        site{
  	        siteMetadata{
    	        title
                description
                author
                data
            }
        }
    }   
    `)
    return (
        <div>
            <h1>Title:{siteMetadata.title} </h1>
            <h1>Author:{siteMetadata.author} </h1>
        </div>
    )
}

export default Header
