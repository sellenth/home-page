import React from "react"
import { Link } from "gatsby"

import styles from "./index.module.sass"
import { Document, Page } from "react-pdf"
import SEO from "../components/seo"
import { FaHome } from "react-icons/fa"

function Resume() {
  return (
    <div className={styles.centerbox}>
      <SEO title="Resume" />
      <Document file="/resume.pdf">
        <Page pageNumber={1} renderAnnotationLayer={false} />
      </Document>
      <div className={styles.pageControl}>
        <Link to="/">
          <FaHome color={"#3c3a40"} size={"2.9em"} className={styles.home} />
        </Link>
      </div>
    </div>
  )
}

export default Resume
