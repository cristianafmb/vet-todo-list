import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, checklist, setStep }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} checklist={checklist} setStep={setStep}/>
      <div
        style={{
          margin: `auto`,
          maxWidth: `var(--size-content)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            height: '5vh',
            display: 'grid',
            alignItems: 'center'
          }}
        >
         <p className="fs-6 raleway black"> © {new Date().getFullYear()} &middot; Cristiana Baiorte</p>
          {` `}
        </footer>
      </div>
    </>
  )
}

export default Layout
