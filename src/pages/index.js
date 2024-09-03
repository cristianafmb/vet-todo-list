import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Starting from '../images/starting.inline.svg'

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/index.scss'
import GeneralButton from "../components/generalButton"


const IndexPage = () => {
  const { t } = useTranslation()
  const datatHomepage = t("homepage", { returnObjects: true })

  return (
    <Layout>
      <Seo seo={t("homepage", { returnObjects: true })['seo']} />

      <div className="container-starting-animation d-grid container-height">
        <Starting />
        <div className="d-grid container-title-general-button text-center pb-5">
          <h1 className="fs-2 blueTitle raleway mb-0">{datatHomepage.intro.title}</h1>
          <GeneralButton text={datatHomepage.intro.btn.text} link={datatHomepage.intro.btn.link} />
        </div>
      </div>


    </Layout>
  )
}


export default IndexPage

export const QueryHomepagePT = graphql`
  query($language: String!) {
    locales: allLocale(filter: { ns: { in: [ "homepage"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`