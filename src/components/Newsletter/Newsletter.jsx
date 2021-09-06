import { useState } from 'react'
import styles from './newsletter.module.css'
import axios from 'axios'

const Newsletter = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState('')
  const [alertColor, setAlertColor] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    //Validate fields

    if (!mail || !name) {
      setAlert('Por favor, rellene los campos para continuar.')
      setAlertColor('#d9534f')
    } else if ((mail && !mail.includes('@')) || !mail.includes('.')) {
      setAlert('Dirección de e-mail inválida o inexistente')
      setAlertColor('#d9534f')
    } else {
      setAlert('Gracias por suscribirte a nuestro newsletter!')
      setAlertColor('#5cb85c')
    }

    //Reset input values
    setName('')
    setMail('')

    //Make the POST request
    const inputData = { email: 'heroku@test.co', name: 'test' }
    axios
      .post('https://corebiz-test.herokuapp.com/api/v1/newsletter', inputData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    //Show the alert to the user
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  }

  return (
    <section className={styles.newsletter}>
      <h1>¡Únete a nuestras novedades y promociones!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Ingresa tu nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Ingresa tu mail'
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input type='submit' value='Suscribirme' />
      </form>
      {showAlert && (
        <div className={styles.alert} style={{ backgroundColor: alertColor }}>
          {alert}
        </div>
      )}
    </section>
  )
}

export default Newsletter
