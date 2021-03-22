import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import Cookies from "js-cookie";
import config from '../config'

interface UserContextData {
  username: string;
  password: string;
  fullName: string;
  urlProfilePicture: string;
  setUser: (e) => void;
  setUserPassword: (e) => void;
  SignIn: () => void;
  SignInGoogle: (res) => void;
  SignOut: () => void;
  SearchUserDetails: (token) => void;
  ClearUserInfo: () => void;
}
export const UserContext = createContext({} as UserContextData);

export const UserProvider: React.FC = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [urlProfilePicture, setUrlProfilePicture] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [googleAuthenticated, setGoogleAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const router = useRouter()

  function ClearUserInfo(){
    setUsername('')
    setPassword('')
    setFullName('')
    setAuthenticated(false)
    setGoogleAuthenticated(false)
    setAccessToken('')
    setUrlProfilePicture('')
    Cookies.set('accessToken', '')
  }
  function setUser(e) {
    const username = e.target.value;
    setUsername(username);
  }
  function setUserPassword(e) {
    const password = e.target.value;
    setPassword(password);
  }
  function SignIn() {
    axios
      .post(
        `/api/auth?grant_type=password&username=${username}&password=${password}`
      )
      .then((res) => {
        if (res.data.access_token) {
          setAccessToken(res.data.access_token)
          setAuthenticated(true);

          axios.get(`${config.urlGitLabUserInfo}${username}`)
          .then(res => {
            setFullName(res.data[0].name)
            const urlProfilePicture = res.data[0].avatar_url.replace('10.10.1.35','177.84.246.126:9955')
            setUrlProfilePicture(urlProfilePicture)
          })
          router.push('/home')
        }
      })
      .catch((err) => console.log(err));
  }
  function SearchUserDetails(token){
    axios.get(`${config.urlUserIngoGoogle}${token}`)
    .then(res => {
      const {picture, given_name} = res.data
      setUrlProfilePicture(picture)
      setFullName(given_name)
      setUsername(res.data.email.split("@")[0])
    })
  }
  function SignInGoogle({accessToken}){
      Cookies.set('accessToken', accessToken)
      setAccessToken(accessToken)
      setGoogleAuthenticated(true)
      SearchUserDetails(accessToken)
      router.push('/home')
  }
  function SignOut(){
    router.push('/')
    ClearUserInfo()
  }

  return (
    <UserContext.Provider
      value={{
        username,
        setUser,
        password,
        setUserPassword,
        fullName,
        urlProfilePicture,
        SignIn,
        SignInGoogle,
        SearchUserDetails,
        SignOut,
        ClearUserInfo
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
