import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import Bestspecialist from "./bestspecialist"
import OurServices from "./ourservices"
import Clinic from "./clinic_with_Innovative"
import Doctorcart from "./doctorcart"
import Customer from "./customer"
import Contact from "./contact"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>

        <Bestspecialist />
        <OurServices />
        <Clinic />
        <Doctorcart />
        <Customer />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Layout
