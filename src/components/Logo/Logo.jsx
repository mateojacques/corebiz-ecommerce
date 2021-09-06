import styles from './logo.module.css'

const Logo = () => {
  return (
    <a href='/' className={styles.logo}>
      <svg viewBox='0 0 548 154' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M311 72V130H320H329V124.3V118.6L332.8 122.2C339.3 128.4 342.3 129.5 353.5 129.5C362.2 129.5 364.2 129.2 369.1 126.9C376.6 123.4 382 117.8 386.1 109.4C389.4 102.7 389.5 102.3 389.5 89.5C389.5 73.1 387.5 67.4 379.1 58.9C371.9 51.8 365.9 49.5 354 49.5C344.3 49.5 337.9 51.8 332.3 57.2L329 60.4V37.2V14H320H311V72ZM360 67.5C363.6 69.4 367.7 74 369.4 78.2C371.2 82.5 371.5 93.7 369.9 99.3C368.7 103.6 364 109.4 360 111.5C348.5 117.4 334.1 110.9 330.4 98.2C326.1 83.4 332.7 69 345.4 65.9C349.2 65 356.6 65.8 360 67.5Z' />
        <path d='M46.1 50.5C39.9 52.4 31.6 58.4 27.6 63.9C15.4 80.5 16.9 104.5 31.1 119.1C46 134.4 71.6 134.4 85.2 119C89.2 114.5 91.2 111.3 92.4 107.4C93 105.5 92.2 105 85.3 102.5C80.2 100.6 77.5 100 77.2 100.8C75.2 106.8 68.1 112.6 61.3 113.6C52.2 114.9 42.8 109.2 39.3 100.2C35.9 91.2 37.7 78.1 43.3 72.2C48.6 66.4 59 64.3 66.3 67.4C70.1 68.9 74.7 74 75.6 77.6C76 79 76.8 79.9 77.4 79.7C78 79.5 81.5 78.2 85.3 76.9C92.7 74.3 93.2 73.3 90.4 67.7C83.9 55.3 72.8 48.9 57.6 49.1C53.7 49.1 48.5 49.8 46.1 50.5Z' />
        <path d='M126.5 50.2999C106.9 56.8999 95.7 75.1999 98.9 95.5999C101.8 114.6 116.1 128.3 134.3 129.7C159.5 131.6 178.1 114.1 178 88.6999C177.9 73.0999 169.7 59.3999 156.4 52.8999C150.7 50.0999 148.7 49.5999 140.2 49.2999C133.9 49.0999 129.1 49.4999 126.5 50.2999ZM143.5 66.0999C149.2 67.4999 155.3 72.7999 157.5 78.1999C159.8 83.7999 159.8 95.0999 157.6 100.5C154.1 108.8 146.9 113.4 137.8 113.4C129.7 113.3 123.6 109.5 119.7 102C117.1 96.9999 116.9 95.7999 117.2 87.8999C117.5 80.5999 117.9 78.7999 120.2 75.1999C123.3 70.5999 126.2 68.3999 131.8 66.3999C136.4 64.7999 138 64.6999 143.5 66.0999Z' />
        <path d='M180.5 50.2999C180.2 50.8999 180.1 69.0999 180.2 90.4999L180.5 129.5L189.1 129.8L197.8 130.1L198.2 105.8C198.7 79.7999 199.2 76.8999 204.2 72.2999C207.5 69.1999 211.6 67.8999 218.5 67.5999L224.5 67.3999V58.4999V49.4999L218 49.5999C210.5 49.6999 206.1 51.5999 201.3 56.7999L198 60.3999V54.6999V48.9999H189.5C183.6 48.9999 180.8 49.3999 180.5 50.2999Z' />
        <path d='M255.3 50.4C244.4 53.9 233.8 63.7 229.9 73.8C226.8 81.8 226.7 96.1 229.9 104.1C234.1 115.1 241.7 122.6 253 127.2C257.5 129 260.5 129.4 269.5 129.5C279.4 129.5 281.1 129.2 286.2 126.8C289.3 125.4 293.8 122.4 296.2 120.1C301.5 115.2 306.8 106.2 304.8 105.5C299.3 103.4 289.4 101.2 289.2 102C288.1 105.3 283.8 109.8 280 111.8C274.4 114.6 265.3 114.8 259.5 112.1C252.7 108.9 247 101.6 247 95.9C247 94.1 248 94 277.1 94H307.3L306.7 85.7C305.9 74.7 303.1 67.3 297 60.7C289.8 52.8 282.4 49.8 269.5 49.3C262.9 49.1 258.1 49.5 255.3 50.4ZM274.3 65.1C276.6 65.7 279.5 66.9 280.7 67.9C283.7 70.4 287 76.1 287 78.7V81H267.5C248.5 81 248 80.9 248 79C248 73.9 253.4 67.7 259.7 65.5C264.4 63.8 268.8 63.7 274.3 65.1Z' />
        <path
          d='M395 89.5V130H403.5H412V89.5V49H403.5H395V89.5Z'
          fill='black'
        />
        <path d='M417.4 50.4C417.1 51.1 417 54.6 417.2 58.1L417.5 64.5L442.3 64.8C455.9 64.9 467 65.2 467 65.5C467 65.7 456 76.8 442.5 90.1L418 114.3V122.1V130H457.5H497V122V114H471.8L446.5 113.9L471.8 89.2L497.1 64.5L497 56.7V49H457.5C425.1 49 417.8 49.2 417.4 50.4Z' />
        <circle cx='516' cy='118' r='13' fill='#C4C4C4' />
      </svg>
    </a>
  )
}

export default Logo