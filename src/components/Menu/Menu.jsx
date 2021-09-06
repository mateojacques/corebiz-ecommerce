import styles from './menu.module.css'

const Menu = ({ width, toggleMenu }) => {
  return (
    <>
      <div className={styles.modal} style={{ width }}></div>

      <div className={styles.menu}>
        <button className={styles.closeBtn} onClick={() => toggleMenu('close')}>
          <svg
            viewBox='0 0 46 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M2 2L44.5 44.5' strokeWidth='3' />
            <path d='M2 44.5L44.5 2' strokeWidth='3' />
          </svg>
        </button>

        <button className={styles.user}>
          <svg
            viewBox='0 0 51 55'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M17.5 8.2C9.90001 15 14.6 27 24.9 27C29.4 27 35 21.5 35 17.1C35 13.2 32.6 8.4 30.1 7C26.6 5.2 20.3 5.8 17.5 8.2ZM29.5 10.5C32.7 13.6 32.9 19.1 30 22C25.2 26.8 16 23 16 16.4C16 13 21.1 8 24.5 8C25.9 8 28.2 9.1 29.5 10.5Z' />
            <path d='M12 28.3C8.6 30 6 35.5 6 41.2C6 49.8 9.7 51.5 28.1 50.8C38.3 50.5 39.4 50.3 41.1 48.1C44.9 43.5 42.8 31.9 37.6 28.5C35.2 26.9 34.8 26.9 29.6 29L24.2 31.3L19.8 29.1C14.6 26.6 15.2 26.7 12 28.3ZM18.4 31.5C21 33.5 27.1 33.4 31.4 31.3C34.8 29.7 35.1 29.7 37 31.5C38.9 33.3 41 38.7 41 42.2C41 43.2 40.1 44.9 39 46C37.2 47.8 35.7 48 24.7 48C11.7 48 9.2 47.3 8.9 43.5C8.4 38.6 9.1 35.1 11.1 32.6C13.4 29.7 15.6 29.4 18.4 31.5Z' />
          </svg>

          <h3>Mi cuenta</h3>
        </button>
      </div>
    </>
  )
}

export default Menu
