import { useState } from 'react'
import styles from './navbar.module.css'
import { Logo, MenuIcon, SearchInput, Nav, Menu } from '../../components'

const Navbar = ({ innerWidth, cartItems }) => {
  const [modalWidth, setModalWidth] = useState('0%')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu(action) {
    if (action === 'open') {
      setModalWidth('100%')
      setIsMenuOpen(true)
    } else {
      setModalWidth('0%')
      setIsMenuOpen(false)
    }
  }

  return (
    <div className={styles.navbar}>
      {innerWidth <= 960 && (
        <>
          {isMenuOpen && <Menu width={modalWidth} toggleMenu={toggleMenu} />}
          {!isMenuOpen && <MenuIcon toggleMenu={toggleMenu} />}
          <Logo />
          <Nav cartItems={cartItems} />
          <SearchInput />
        </>
      )}

      {innerWidth > 960 && (
        <>
          <Logo />
          <SearchInput />
          <Nav cartItems={cartItems} />
        </>
      )}
    </div>
  )
}

export default Navbar
