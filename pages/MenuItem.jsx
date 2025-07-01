import React from 'react'
import styles from "../styles/index.module.css"

function MenuItem({ title }) {
  return (
    <>
    <div className={StyleSheet.menuItem}>
        <h4>{title}</h4>
    </div>
    </>
  )
}

export default MenuItem
