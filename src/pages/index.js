import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from '../components/SEO'
export default ({data}) => {

  const {allStrapiProjects:{nodes:projects}} = data

  return <Layout>
<SEO title="Home" description="this is the home page"/>
    <Hero/>
<Services/>
<Jobs/>
<Projects projects= {projects} title= "featured projects"
showLink/>
/>


  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        title
        url
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

