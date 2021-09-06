import styles from './separator.module.css'

const Separator = ({ color }) => {
  return (
    <div
      className={styles.separator}
      style={{ border: `3px solid ${color}` }}
    ></div>
  )
}

export default Separator
