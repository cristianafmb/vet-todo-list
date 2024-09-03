import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useI18next } from 'gatsby-plugin-react-i18next';

import { GetURL } from "./Images"

function Seo({ lang, seo, post }) {
  const { language } = useI18next();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = seo.description || site.siteMetadata.description
  const metaTitle = (seo?.title || site.siteMetadata?.title) + ' | Foz de Prata'

  var metaImage = ''
  if (post)
    metaImage = seo.image
  else
    metaImage = 'https://vet.cris-portfolio.pt' + GetURL(seo.image)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
    >
      <title>{metaTitle}</title>
      <meta name="og:title" content={metaTitle} />
      <meta name="og:image" content={metaImage} />
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords} />
      <meta name="og:type" content={`website`} />
      <meta name="twitter:card" content={`summary`} />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Satisfy&display=swap" rel="stylesheet" />



    </Helmet>
  )
}
Seo.defaultProps = {
  lang: `pt`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo