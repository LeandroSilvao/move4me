import { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengeContexts";
import Switch from "react-switch";
import Styles from "../styles/components/ChangeThemeColor.module.css";

import { BsMoon, BsBrightnessHigh } from "react-icons/bs";
import Cookies from "js-cookie";
export default function DarkTheme() {
  const { isDark, SetDarkTheme } = useContext(ChallengesContext);

  return (
    <div className={Styles.ChangeThemeColorContainer}>
      <Switch
        onColor="#4B4B4B"
        onHandleColor="#3B9E22"
        offColor="#bdbbbb"
        offHandleColor="#5965E0"
        checked={isDark}
        onChange={isSet => SetDarkTheme(isSet)}
        handleDiameter={30}
        uncheckedIcon={<BsMoon style={{height: '100%',margin: 0, padding: 0, position: 'absolute', right: 3, color: '#000', bottom: 1}}/>}
        checkedIcon={<BsBrightnessHigh style={{height: '100%',margin: 0, padding: 0, position: 'absolute', left: 3, color: '#fff'}}/>}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={50}
        className="react-switch"
        id="material-switch"
      />
      
    </div>
  );
}
