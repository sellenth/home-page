import * as React from "react"
import { Link } from "gatsby"
import { Document } from "react-pdf"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WrittenSample = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Document file="../content/written_sample.pdf" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WrittenSample
