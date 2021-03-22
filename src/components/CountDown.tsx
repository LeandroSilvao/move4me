import Styles from "../styles/components/CountDown.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContexts";
import { ChallengesContext } from "../contexts/ChallengeContexts";

export default function CountDown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);
  const {isDark} = useContext(ChallengesContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={isDark ? `${Styles.CountDownContainer} ${Styles.darkTheme}` : `${Styles.CountDownContainer}`}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={Styles.CountdownButton}>
          Ciclo Encerrado
          <AiFillCheckCircle />
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={isDark ? `${Styles.CountdownButton} ${Styles.CountdownButtonAcative} ${Styles.CountdownButtonAcativeDarkTheme}` : `${Styles.CountdownButton} ${Styles.CountdownButtonAcative}`}
          onClick={resetCountdown}
        >
          Abandonar Ciclo
        </button>
      ) : (
        <button
          type="button"
          className={isDark ? `${Styles.CountdownButton} ${Styles.CountdownButtonDarkTheme}` : `${Styles.CountdownButton}`}
          onClick={startCountdown}
        >
          Iníciar um ciclo
        </button>
      )}
    </div>
  );
}
