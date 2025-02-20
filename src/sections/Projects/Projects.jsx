import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import AppAlumnos from '../../assets/AppAlumnos.png';
import PokeBall from '../../assets/pokeball.png';
import Chat from '../../assets/chat.webp';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={AppAlumnos}
          link="https://github.com/davidcrm/UT7_Tarea2_DavidCarreno.git"
          title="Gestión de alumnos y matrículas"
          description ="Aplicación para gestionar matriculas y alumnos desarrollado en React, CRUD en Express y base de datos Postgres"
        />
        <ProjectCard 
        src={PokeBall}
        link={'https://github.com/davidcrm/ProyectoFinal_PGL_PokeAPI.git'}
        title={'Pokedex Para Android'}
        description={'Pokedex Desarrollada en Kotlin con Jetpack Compose utilizando Dagger Hilt para inyección de dependencias, Retrofit para conectar a la API e Intents. Usando Código Limpio'}
        />
        <ProjectCard
          src={Chat}
          link={'https://github.com/davidcrm/PGV_ActividadSockets_Terminada.git'}
          title={'Chat Multihilo con Sockets'}
          description={'Proyecto desarrollado en Java Puro utilizando sockets e hilos para hacer un chat cliente servidor con interfaz gráfica en JavaFX'}
        />
      </div>
    </section>
  )
}

export default Projects