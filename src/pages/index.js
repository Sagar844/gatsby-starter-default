import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <h1 className="text-red-500">how from gatsby</h1>
          <Link to="/about">about</Link>
        </Layout>
      </div>
    </>
  )
}

export const Head = () => <Seo title="All posts" />
