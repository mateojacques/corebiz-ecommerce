import styles from './products.module.css'
import { Product, Separator } from '../../components'

const Products = ({ productList, onAddProduct }) => {
  return (
    <section className={styles.products}>
      <div className={styles.title}>
        <h1>Más Vendidos</h1>

        <Separator color='#bdbdbd' />
      </div>

      <div className={styles.slider}>
        {productList.map((product) => {
          const { productId, productName, stars, imageUrl, price } = product
          return (
            <Product
              key={productId}
              name={productName}
              stars={stars}
              img={imageUrl}
              price={price}
              onAddProduct={onAddProduct}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Products
