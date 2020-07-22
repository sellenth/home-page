import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styles from "./index.module.sass"
import { FaGithubSquare, FaFileWord } from "react-icons/fa"
import { IoIosPaper } from "react-icons/io"
import { IconContext } from "react-icons/lib"

const IndexPage = () => (
  <div className={styles.centerbox}>
    <SEO title="Home" />
    <div>
      <div className={name}>
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
          <Link to="/sample" title="View a writing sample">
            <FaFileWord />
          </Link>
          <Link to="/resume" title="My current resume">
            <IoIosPaper />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  </div>
)

export default IndexPage
