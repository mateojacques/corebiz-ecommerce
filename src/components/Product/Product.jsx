import styles from './product.module.css'

const Product = ({ name, stars, img, price, onAddProduct }) => {
  let starsCount = [1, 2, 3, 4, 5]

  return (
    <article className={styles.product}>
      {price < 10000 && (
        <div className={styles.discount}>
          <p>OFF</p>
          <svg
            viewBox='0 0 379 379'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M378.5 378.5L0 0H378.5V378.5Z' />
          </svg>
        </div>
      )}
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className={styles.stars}>
        {starsCount.map((star) => {
          return (
            <svg
              key={star}
              width='25'
              height='25'
              viewBox='0 0 35 31'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='#ffffffff'></g>
              <g id='#f8475fff'>
                <path
                  opacity='1.00'
                  d=' M 18.64 2.83 C 19.99 5.68 21.29 8.56 22.61 11.43 C 25.96 11.72 29.32 11.95 32.67 12.21 C 30.17 14.32 27.57 16.32 25.03 18.38 C 25.83 21.41 26.60 24.45 27.33 27.50 C 24.44 25.91 21.57 24.27 18.68 22.67 C 15.76 24.26 12.88 25.91 9.97 27.51 C 10.73 24.47 11.53 21.44 12.27 18.40 C 9.74 16.31 7.15 14.31 4.63 12.23 C 7.98 11.96 11.34 11.70 14.70 11.45 C 16.03 8.58 17.33 5.70 18.64 2.83 Z'
                />
              </g>
            </svg>
          )
        })}
      </div>
      <p>
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      <button className={styles.buyBtn} onClick={onAddProduct}>
        COMPRAR
      </button>
    </article>
  )
}

export default Product
