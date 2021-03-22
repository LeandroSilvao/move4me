import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/LoginContexts";

import styles from "../styles/pages/Login.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

import GoogleLogin from "react-google-login";

import config from '../config'



export default function Login() {
  const { SignIn, SignInGoogle, setUser, setUserPassword, password, username, ClearUserInfo } = useContext(
    UserContext
  );

  useEffect(() => {
    ClearUserInfo()
  }, [])

  return (
    <div className={styles.bodyLogin}>
      <div className={styles.imgLogin}>
        <img src="logo-full.png" alt="move.it" />
      </div>

      <div className={styles.formLogin}>
        <div className={styles.formInput}>
          <div className={styles.icon}>
            <FaUser />
          </div>
          <input
            placeholder="Username"
            tabIndex={1}
            type="text"
            id="user-login"
            value={username}
            onChange={(e) => setUser(e)}
            autoComplete="off"
          />
        </div>
        <div className={styles.formInput}>
          <div className={styles.icon}>
            <FaLock />
          </div>
          <input
            placeholder="Password"
            tabIndex={2}
            type="password"
            id="password-login"
            value={password}
            onChange={(e) => setUserPassword(e)}
          />
        </div>

        <div className={styles.formButton}>
          <button onClick={SignIn}>
            <AiFillGitlab/>
            Sign in 
            </button>
          <div className={styles.otherLogins}>
            <GoogleLogin
              clientId={config.clientIdGoogle}
              buttonText="Sign in"
              onSuccess={SignInGoogle}
              // onFailure={responseGoogleE}
              cookiePolicy={"single_host_origin"}
              prompt="consent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
