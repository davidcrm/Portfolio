import styles from './HeroStyle.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import gitHubLight from '../../assets/github-light.svg'
import gitHubDark from '../../assets/github-dark.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CV David Carreño Macías.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun: moon
  const gitHubIcon = theme === 'light' ? gitHubLight: gitHubDark
  const linkedInIcon = theme === 'light' ? linkedInLight: linkedInDark

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Foto de perfil de David Carreño" />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="Modo" 
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          David 
            <br />
          Carreño
        </h1>
        <h2>
          Desarrollador
        </h2>
        <span>
          <a href="https://github.com/davidcrm" target='_blank'>
            <img src={gitHubIcon} alt="GitHub Icon"/>
          </a>
          <a href="www.linkedin.com/in/davidcarrenomacias" target='_blank'>
            <img src={linkedInIcon} alt="LinkedIn Icon"/>
          </a>
        </span>
        <p className={styles.description}>Adentrándome en el mundo de la programación y aprendiendo cada día como el primero.</p>
        <a href={CV} download>
          <button className='hover'>Curriculum</button>
        </a>
      </div>
    </section>
  )
}

export default Hero