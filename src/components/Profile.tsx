import { useContext, useEffect } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import { UserContext } from "../contexts/LoginContexts";
import Styles from "../styles/components/Profile.module.css";

import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Profile() {
  const { level, isDark } = useContext(ChallengesContext);
  const { username, urlProfilePicture, fullName, SignOut } = useContext(UserContext);
 
  return (
    <div
      className={
        isDark
          ? `${Styles.profileContainer} ${Styles.darkTheme}`
          : `${Styles.profileContainer}`
      }
      >
      <img src={urlProfilePicture} alt="" />

      <div className={Styles.infoLogin}>
      
        <div>
          <strong>{fullName}</strong>
          <p>{username}</p>
        </div>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>

      </div>

      <div className={Styles.logout}>
        <RiLogoutBoxRLine onClick={SignOut}/>
      </div>

    </div>
  );
}
