import React, { useState } from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useRouter()

  const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((usserAuth) => {
      dispatch(
        login({
          email: usserAuth.user.email,
          uid: usserAuth.user.uid,
          displayName: usserAuth.user.displayName,
        })
      )
      history.push('/teslaaccount')
    }).catch((error) => alert(error.message))
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginHeader}>
          <div className={styles.loginLogo}>
            <Link href={"/"}>
              <img
                src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.loginLanguage}>
            <TbWorld /> <span>en-US</span>
          </div>
        </div>
        <div className={styles.loginInfo}>
          <h1>Sign In</h1>
          <form className={styles.loginForm}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <PrimaryButton name="Sign In" type="submit" onCLick={signIn} />
          </form>
          <div className={styles.loginDivider}>
            <hr /> <span>OR</span> <hr />
          </div>
          <Link href={"/signup"}>
            <SecondaryButton
              name="Create Account"
              type="submit"
              onCLick={signIn}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
