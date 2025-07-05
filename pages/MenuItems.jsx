import styles from "../styles/index.module.css"

function MenuItem({ title }) {
  return (
    <>
    <div className={styles.menuItem}>
        <h4>{title}</h4>
    </div>
    </>
  )
}

export default MenuItem
