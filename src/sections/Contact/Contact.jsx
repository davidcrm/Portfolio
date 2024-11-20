import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'> Contacto</h1>
      <form action="https://formspree.io/f/mgvezevg" method='post'>
        <div className='formGroup'>
          <label htmlFor="Name" hidden>
            Nombre:
          </label>
          <input 
          type="text"
          name="Nombre" 
          id="name"
          placeholder='Nombre'
          required />
        </div>
        <div className='formGroup'>
          <label htmlFor="Email" hidden>
            Email:
          </label>
          <input 
          type="text"
          name="Email" 
          id="email"
          placeholder='Email'
          required />
        </div>
        <div className='formGroup'>
          <label htmlFor="Message" hidden>
            Mensaje:
          </label>
          <textarea
          name="message" 
          id="message"
          placeholder='Mensaje'
          required />
        </div>
        <input type="submit" className='hover btn' value="Enviar" />
      </form>
    </section>
  )
}

export default Contact