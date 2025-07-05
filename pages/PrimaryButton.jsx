import styles from "../styles/index.module.css"

function PrimaryButton({name, type, onClick}) {
  return (
    <>
    <button className={styles.primaryButton} onClick={onClick} type={type}>
        {name}
    </button>
    </>
  )
}

export default PrimaryButton
