import React, { useState } from "react"
import { Link } from "gatsby"

import styles from "./index.module.sass"
import { Button } from "react-bootstrap"
import { Document, Page } from "react-pdf"
import SEO from "../components/seo"
import { FaHome } from "react-icons/fa"
import useWindowDimensions from "../hooks/useWindowDimensions"

function WrittenSample() {
  const { height, width } = useWindowDimensions()
  const [pageState, setPage] = useState({
    currPage: 1,
    numPages: 1,
  })

  const { currPage, numPages } = pageState

  function updateNumPages({ numPages: pageCount }) {
    setPage({ ...pageState, numPages: pageCount })
  }

  function nextPage() {
    if (currPage < numPages) {
      setPage({ ...pageState, currPage: currPage + 1 })
    }
  }

  function prevPage() {
    if (currPage > 1) {
      setPage({ ...pageState, currPage: currPage - 1 })
    }
  }

  return (
    <div className={styles.centerbox}>
      <SEO title="Written Sample" />
      <Document
        file="/written_sample.pdf"
        onLoadSuccess={updateNumPages}
        loading={
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <Page
          width={Math.min(width, height * 0.7)}
          pageNumber={currPage}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className={styles.pageControl}>
        <Button
          title="Previous Page"
          variant="dark"
          disabled={currPage === 1 ? true : false}
          className={styles.pageButton}
          onClick={prevPage}
        >
          &larr;
        </Button>
        <Link to="/" title="Home">
          <FaHome color={"#3c3a40"} size={"2.9em"} className={styles.home} />
        </Link>
        <Button
          title="Next Page"
          variant="dark"
          disabled={currPage === numPages ? true : false}
          className={styles.pageButton}
          onClick={nextPage}
        >
          &rarr;
        </Button>
      </div>
    </div>
  )
}

export default WrittenSample
