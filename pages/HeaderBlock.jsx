import React from 'react'
import styles from '../styles/index.module.css'

function HeaderBlock() {
  return (
    <>
    <div className={styles.headerBlock}>
       <div className={styles.headerBlock__info}>
        <div className={styles.headerBlock__infoText}>
            <h1>Model 3</h1>
            <h4>Order Online for <span>Touchless Delivery</span></h4>
        </div>
        <div className={styles.headerBlock__actions}>
          <button className={styles.buttonPrimary}>Custom Order</button>
          <button className={styles.buttonSecondary}>Existing Inventory</button>
        </div>
       </div>
    </div>
    </>
  )
}

export default HeaderBlock
