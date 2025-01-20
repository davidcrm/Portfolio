import styles from './ProjectStyles.module.css'
import logoJuego from '../../assets/logoJuego.png'
import divisas from '../../assets/imagenDivisas.png'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logoJuego}
          link="https://davidcrm.github.io/juegoReact/"
          title="Juego de Peleas en React"
          description ="Juego simple de peleas con azar desarrollado en React."
        />
        <ProjectCard
          src={divisas}
          link="https://github.com/davidcrm/Cambio-de-divisa-Multihilo.git"
          title="Aplicación cambio de divisa"
          description ="Aplicación desarrollada en JavaFX usando programación multihilo para convertir divisas."
        />
        <ProjectCard
          src={to_do}
          link="https://davidcrm.github.io/To-do-List/"
          title="To-do List en React"
          description ="Aplicación web React para añadir tareas con un contador de las mismas."
        />
      </div>
    </section>
  )
}

export default Projects