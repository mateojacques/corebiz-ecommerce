import styles from './banner.module.css'
import SliderControls from '../SliderControls/SliderControls'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        <h2>¡Hola! ¿Qué es lo que buscas?</h2>
        <h1>Crear o migrar tu comercio electrónico?</h1>
      </div>

      <SliderControls />
    </div>
  )
}

export default Banner
