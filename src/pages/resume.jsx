import React from "react"
import { Link } from "gatsby"

import styles from "./index.module.sass"
import { Document, Page } from "react-pdf"
import SEO from "../components/seo"
import { FaHome } from "react-icons/fa"
import useWindowDimensions from "../hooks/useWindowDimensions"

function Resume() {
  const { height, width } = useWindowDimensions()
  return (
    <div className={styles.centerbox}>
      <SEO title="Resume" />
      <Document file="/resume.pdf">
        <Page
          pageNumber={1}
          width={Math.min(width, height * 0.7)}
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
