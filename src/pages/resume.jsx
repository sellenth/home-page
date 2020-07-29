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
      <Document
        className={styles.document}
        file="/resume.pdf"
        loading={
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <Page
          renderTextLayer={false}
          className={styles.pdfpage}
          pageNumber={1}
          scale={2.0}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className={styles.pageControl}>
        <Link to="/" title="Home">
          <FaHome color={"#3c3a40"} size={"2.9em"} className={styles.home} />
        </Link>
      </div>
    </div>
  )
}

export default Resume
