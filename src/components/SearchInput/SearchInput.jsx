import styles from './searchInput.module.css'

const SearchInput = () => {
  return (
    <div className={styles.searchInput}>
      <input type='text' placeholder='¿Qué estás buscando?' />
      <svg viewBox='0 0 131 118' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M37.6827 16.9727C19.2457 26.1864 12.6148 47.8467 22.3185 66.4357C30.8901 82.9234 50.4593 90.0357 68.0877 83.0851L74.7185 80.3371L88.142 93.7535C99.7864 105.392 102.051 107.008 105.77 106.038C108.358 105.392 110.299 103.452 110.946 100.866C111.916 97.1481 110.299 94.8851 98.4926 83.0851L85.0691 69.6686L87.8185 63.8494C89.4358 60.4549 90.5679 54.1508 90.5679 48.8166C90.5679 21.9837 62.1037 4.84943 37.6827 16.9727ZM68.0877 26.3481C76.4975 32.0056 80.8642 39.6029 80.8642 48.8166C80.8642 59.8083 76.0123 68.5371 67.7642 72.9015C48.3568 82.7618 27.4938 70.1535 27.4938 48.8166C27.4938 39.6029 31.8605 32.0056 40.2704 26.3481C47.8716 21.1755 60.4864 21.1755 68.0877 26.3481Z' />
      </svg>
    </div>
  )
}

export default SearchInput