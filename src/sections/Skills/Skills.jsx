import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './SkillsStyle.module.css';

function Skills() {
  const {theme, toggleTheme } = useTheme();

  const skillsRow1 = ["HTML", "CSS", "JAVA", "JavaScript", "SQL", "Kotlin"];
  const skillsRow2 = ["React", "Django", "BootStrap", "Ionic"];
  const skillsRow3 = ["Git/GitHub", "PostgreSQL", "MySQL"];

  const skillNameMap = {
    HTML: "html5",
    CSS: "css3",
    JAVA: "openjdk",
    JavaScript: "javascript",
    SQL: "mysql",
    Kotlin: "kotlin",
    React: "react",
    Django: "django",
    JavaFX: "java",
    BootStrap: "bootstrap",
    Ionic: "ionic",
    "Git/GitHub": "github",
    PostgreSQL: "postgresql",
    MySQL: "mysql"
  };

  // Renderizar una fila de habilidades
  const renderSkillRow = (skills) => (
    <div className={styles.skillList}>
      {skills.map((skill, index) => {
        const formattedSkill = skillNameMap[skill] || skill.replace(/[^a-zA-Z]/g, "").toLowerCase();
        const logoUrl = `https://cdn.simpleicons.org/${formattedSkill}`;

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
