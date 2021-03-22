import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../../challenges.json";
import Cookies from "js-cookie";
import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  experienceToNextLevel: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  isDark: boolean;
  accessToken: string;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  levelUp: () => void;
  closeLevelUpModal: () => void;
  SetDarkTheme: (isSet) => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  isDark: boolean;
  accessToken: string;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider(props: ChallengesProviderProps) {
  const [level, setLevel] = useState(props.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    props.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    props.challengesCompleted ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(props.isDark ?? false);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (Notification) Notification.requestPermission();
    if (isDark) document.body.classList.add("body-dt");
    else document.body.classList.remove("body-dt");
  }, []);

  useEffect(() => {
    Cookies.set("isDark", isDark.toString());
  }, [isDark]);

  useEffect(() => {
    Cookies.set("level", level.toString());
    Cookies.set("currentExperience", currentExperience.toString());
    Cookies.set("challengesCompleted", challengesCompleted.toString());
  }, [level, currentExperience, challengesCompleted]);

  function SetDarkTheme(isSet) {
    if (isSet) document.body.classList.add("body-dt");
    else document.body.classList.remove("body-dt");

    Cookies.set("isDark", isDark.toString());
    setIsDark(isSet);
  }
  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }
  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }
  function startNewChallenge() {
    const randomChallengIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengIndex];
    setActiveChallenge(challenge);

    if (Audio) {
      new Audio("/notification.mp3").play();
    }

    if (Notification) {
      if (Notification.permission === "granted") {
        new Notification("Novo desafio", {
          body: `Valendo: ${challenge.amount}xp!`,
        });
      }
    }
  }
  function resetChallenge() {
    setActiveChallenge(null);
  }
  function completeChallenge() {
    if (!activeChallenge) return;
    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  if (props.accessToken.length === 0) {
    return (
      <ChallengesContext.Provider
        value={{
          isDark,
          level,
          experienceToNextLevel,
          currentExperience,
          challengesCompleted,
          startNewChallenge,
          activeChallenge,
          resetChallenge,
          completeChallenge,
          levelUp,
          closeLevelUpModal,
          SetDarkTheme,
          accessToken,
        }}
      >
        {isLevelUpModalOpen && <LevelUpModal />}
      </ChallengesContext.Provider>
    );
  } else {
    return (
      <ChallengesContext.Provider
        value={{
          isDark,
          level,
          experienceToNextLevel,
          currentExperience,
          challengesCompleted,
          startNewChallenge,
          activeChallenge,
          resetChallenge,
          completeChallenge,
          levelUp,
          closeLevelUpModal,
          SetDarkTheme,
          accessToken,
        }}
      >
        {props.children}
        {isLevelUpModalOpen && <LevelUpModal />}
      </ChallengesContext.Provider>
    );
  }
}
