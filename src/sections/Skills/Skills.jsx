import styles from './SkillsStyle.module.css'
import SkillList from '../../common/SkillList'
function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML"/>
        <SkillList skill="CSS"/>
        <SkillList skill="JAVA"/>
        <SkillList skill="JavaScript"/>
        <SkillList skill="SQL"/>
        <SkillList skill="Kotlin"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="React"/>
        <SkillList skill="Django"/>
        <SkillList skill="JavaFX"/>
        <SkillList skill="BootStrap"/>
        <SkillList skill="Ionic"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Git/GitHub"/>
        <SkillList skill="PostgreeSQL"/>
        <SkillList skill="MySQL"/>
        <SkillList skill="JetPack Compose"/>
      </div>
    </section>
  )
}

export default Skills