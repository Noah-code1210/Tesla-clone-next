import styles from "../styles/index.module.css"

function SecondaryButton({name, type, onClick}) {
  return (
    <>
    <button className={styles.secondaryButton}>
        {name}
    </button>
    </>
  )
}

export default SecondaryButton
