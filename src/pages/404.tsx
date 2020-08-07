import * as React from "react"

import SEO from "../components/seo"
import styles from "./index.module.sass"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className={styles.centerbox}>
    <SEO title="404: Not found" />
    <div>
      <h1>NOT FOUND</h1>
      <p>I&apos;ll check the logs on this one :)</p>
      <Link to="/">Take me home</Link>
    </div>
  </div>
)

export default NotFoundPage
