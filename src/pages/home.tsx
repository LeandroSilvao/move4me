import React, { useContext, useEffect } from "react";

import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallengs from "../components/CompletedChallengs";
import CountDown from "../components/CountDown";
import ChallengeBox from "../components/ChallengeBox";
import ChangeThemeColor from "../components/SetDarkTheme";

import { CountdownProvider } from "../contexts/CountdownContexts";
import { ChallengesProvider } from "../contexts/ChallengeContexts";
import { UserContext } from "../contexts/LoginContexts";

import Styles from "../styles/pages/Home.module.css";
import Cookies from "js-cookie";

export default function Home(props) {
  const { urlProfilePicture, SearchUserDetails } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
     if (props.accessToken) {
      if (!urlProfilePicture) SearchUserDetails(Cookies.get("accessToken"));
    } else router.push("/");
  }, [])

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      isDark={props.isDark}
      accessToken={props.accessToken}
    >
      <div className={Styles.container}>
        <ChangeThemeColor />

        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallengs />
              <CountDown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>

    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    isDark,
    accessToken,
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      isDark: isDark === "false" ? false : true,
      accessToken: accessToken
    },
  };
};
