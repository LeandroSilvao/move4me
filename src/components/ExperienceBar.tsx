import Cookies from "js-cookie";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import styles from "../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel, isDark } = useContext(
    ChallengesContext
  );
  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel ) 
  return (
    <header className={isDark ? `${styles.experienceBar} ${styles.darkTheme}` : `${styles.experienceBar}`}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        {/* <div style={{ width: `${percentToNextLevel}%` }} /> */}
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
