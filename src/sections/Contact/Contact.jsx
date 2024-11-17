import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'> Contact</h1>
      <form action="https://formspree.io/f/mgvezevg" method='post'>
        <div className='formGroup'>
          <label htmlFor="Name" hidden>
            Nombre:
          </label>
          <input 
          type="text"
          name="name" 
          id="name"
          placeholder='name'
          required />
        </div>
        <div className='formGroup'>
          <label htmlFor="email" hidden>
            Email:
          </label>
          <input 
          type="text"
          name="email" 
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
          placeholder='Message'
          required />
        </div>
        <input type="submit" className='hover btn' value="Submit" />
      </form>
    </section>
  )
}

export default Contact