import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styles from "./index.module.sass"
import { FaGithubSquare } from "react-icons/fa"
import { GoTasklist } from "react-icons/go"
import { IoIosPaper } from "react-icons/io"
import { IconContext } from "react-icons/lib"

const IndexPage = () => (
  <div className={styles.centerbox}>
    <SEO title="Home" />
    <div>
      <div className={styles.name}>
        <h1 className={styles.firstname}>Halston</h1>
        <h2 className={styles.lastname}>Sellentin</h2>
      </div>
      <div className={styles.iconBar}>
        <IconContext.Provider
          value={{
            size: "4em",
            className: styles.icons,
          }}
        >
          <a href="https://www.github.com/sellenth" title="Check out my Github">
            <FaGithubSquare />
          </a>
          <Link to="/resume" title="My current resume">
            <GoTasklist />
          </Link>
          <Link to="/written-sample" title="View a writing sample">
            <IoIosPaper />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  </div>
)

export default IndexPage
