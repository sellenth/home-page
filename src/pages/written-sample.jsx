import React, { useState } from "react"
import { Link } from "gatsby"

import styles from "./index.module.sass"
import { Button } from "react-bootstrap"
import { Document, Page } from "react-pdf"
import SEO from "../components/seo"
import { FaHome } from "react-icons/fa"

function WrittenSample() {
  const [page, setPage] = useState(1)

  function nextPage() {
    if (page < 4) {
      setPage(page + 1)
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className={styles.centerbox}>
      <SEO title="Written Sample" />
      <Document file="/written_sample.pdf">
        <Page pageNumber={page} />
      </Document>
      <div className={styles.pageControl}>
        <Button className={styles.pageButton} onClick={prevPage}>
          &larr;
        </Button>
        <Link to="/">
          <FaHome color={"#3c3a40"} size={"2.9em"} className={styles.home} />
        </Link>
        <Button className={styles.pageButton} onClick={nextPage}>
          &rarr;
        </Button>
      </div>
    </div>
  )
}

export default WrittenSample
