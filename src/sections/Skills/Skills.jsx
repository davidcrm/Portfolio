import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './SkillsStyle.module.css';
import javalogo from '../../assets/java-icon.svg'

function Skills() {
  const {theme, toggleTheme } = useTheme();

  const skillsRow1 = ["html5", "css3", "Java", "JavaScript","Python", "Kotlin"];
  const skillsRow2 = ["React", "Django", "BootStrap", "Ionic"];
  const skillsRow3 = ["Git/GitHub", "PostgreSQL", "MySQL"];


  const color = theme === "light" ? "000000" : "ffffff";

  // Renderizar una fila de habilidades
  const renderSkillRow = (skills) => (
    <div className={styles.skillList}>
      
      {skills.map((skill) => {
        console.log(skill)
        const logoUrl = `https://cdn.simpleicons.org/${skill}`;
        if (skill === "Java"){
          return(
            <span>
            <img
              src={javalogo}
              alt={`Java icon`}
            />
            <p>{skill}</p>
          </span>
          )
        }
        return (
          <span>
            <img
              src={logoUrl}
              alt={`${skill} icon`}
            />
            <p>{skill}</p>
          </span>
        );
      })}
    </div>
  );

  return (
    <section id="skills" className={styles.container}>
      {//{console.log(theme)}
      }
      <h1 className="sectionTitle">Skills</h1>
      {renderSkillRow(skillsRow1)}
      <hr/>
      {renderSkillRow(skillsRow2)}
      <hr/>
      {renderSkillRow(skillsRow3)}
    </section>
  );
}

export default Skills;
