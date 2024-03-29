import styles from './menuIcon.module.css'

const MenuIcon = ({ toggleMenu }) => {
  return (
    <button className={styles.menuIcon} onClick={() => toggleMenu('open')}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.094 20.082'>
        <path
          d='M30.094,20.082H0V16.736H30.094v3.345Zm0-8.367H0V8.367H30.094v3.346Zm0-8.368H0V0H30.094V3.345Z'
          transform='translate(0 0)'
        />
      </svg>
    </button>
  )
}

export default MenuIcon
