import { useState } from "react";
import styles from "../styles/index.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const dispatch = useDispatch();
    const history = useRouter()

  return (
    <>
      <div className={styles.signup}>
        <div className={styles.signupHeader}>
          <div className={styles.signupLogo}>
            <Link href={"/"}>
              <img
                src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.signupLanguage}>
            <TbWorld /> <span>en-US</span>
          </div>
        </div>
        <div className={styles.signupInfo}>
          <h1>Sign In</h1>
          <form className={styles.signupForm}>
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              id="fName"
              value={fName}
              onChange={(event) => setFName(event.target.value)}
            />
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              id="lName"
              value={lName}
              onChange={(event) => setLName(event.target.value)}
            />
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
            <PrimaryButton name="Create Account" type="submit"/>
          </form>
          <div className={styles.signupDivider}>
            <hr /> <span>OR</span> <hr />
          </div>
            <SecondaryButton
              name="Sign In"
              type="submit"
            />
        </div>
      </div>
    </>
  );
}

export default signup;
