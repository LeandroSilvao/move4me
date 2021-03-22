import { useContext } from "react";
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengeContexts";
import Styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
    const {level, closeLevelUpModal} = useContext(ChallengesContext)

  return (
    <div className={Styles.overlay}>
      <div className={Styles.container}>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Você alcancou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
