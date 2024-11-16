import checkMarkLight from '../assets/checkmark-light.svg'
import checkMarkDark from '../assets/checkmark-dark.svg'
import { useTheme } from './ThemeContext'


function SkillList({ skill }) {
  const {theme, toggleTheme } = useTheme();
  const checkMark = theme === 'light' ? checkMarkLight: checkMarkDark
  return (
    <span>
      <img src={checkMark} alt="CheckMark icon" />
      <p>{skill}</p>
    </span>
  )
}

export default SkillList