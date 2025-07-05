import React, { useState } from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    if (!email) {
      return alert("Please enter your email!")
    }
    if (!password) {
      return alert("Please enter your password!")
    }
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
            <Link href={"/Tesla"}>
              <PrimaryButton name="Sign In" type="submit" onCLick={signIn} />
            </Link>
          </form>
          <div className={styles.loginDivider}>
            <hr /> <span>OR</span> <hr />
          </div>
          <Link href={"/Signup"}>
            <SecondaryButton name="Create Account" type="submit" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
