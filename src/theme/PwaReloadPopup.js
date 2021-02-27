import { useState } from 'react'
import styles from './styles.module.css'

function PwaReloadPopup({ onReload }) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    isVisible && (
      <div className={`alert alert--secondary ${styles.popup}`}>
        <p>Versi baru tersedia!</p>
        <div className={styles.buttonContainer}>
          <button
            className="button button--link"
            type="button"
            onClick={() => {
              setIsVisible(false)
              onReload()
            }}>
            Perbarui
          </button>

          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setIsVisible(false)}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    )
  )
}

export default PwaReloadPopup
