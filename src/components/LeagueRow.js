import React from "react"
import { Link } from 'react-router-dom'
import { string, number } from 'prop-types'

import styles from "./LeagueRow.module.css"

import { LEAGUE_LINK } from "../utils/routes"

const LeagueRow = ({ leagueId, name }) => {
  return (
    <Link to={LEAGUE_LINK(leagueId)} className={styles.item}>
      <li>
        <label>{name}</label>
      </li>
    </Link>
  )
}

LeagueRow.defaultProps = {
  leagueId: null,
  name: '',
}

LeagueRow.propTypes = {
  leagueId: number,
  name: string
};

export default LeagueRow
