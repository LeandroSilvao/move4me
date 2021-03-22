import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import { CountdownContext } from "../contexts/CountdownContexts";
import Styles from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge, isDark } = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountdownContext)
    
    function handleChallengeSucceded(){
      completeChallenge()
      resetCountdown()
    }
    function handleChallengeFailed(){
      resetChallenge()
      resetCountdown()
    }

  return (
    <div className={isDark ? `${Styles.challengeBoxContainer} ${Styles.darkTheme}`: `${Styles.challengeBoxContainer}`}>
      {activeChallenge ? (
          <div className={Styles.challengeActive}>
              <header>Ganhe {activeChallenge.amount}xp</header>

            <main>
                <img src={`icons/${activeChallenge.type}.svg`}/>
                <strong>Novo desafio</strong>
                <p>{activeChallenge.description}</p>
            </main>

            <footer>
                <button type="button" className={Styles.challengeFailedButton} onClick={handleChallengeFailed}>Falhei</button>
                <button type="button" className={Styles.challengeSuccededButton} onClick={handleChallengeSucceded}>Completei</button>
            </footer>
          </div>
      ) : (
          <div className={Styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
