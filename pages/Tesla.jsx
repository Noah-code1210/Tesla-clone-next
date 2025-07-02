import React from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Car from "./Car";

function Tesla({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const logoutOfApp = () => {};
  return (
    <>
      <div className={styles.tesla}>
        <div className={styles.teslaHeader}>
          <div className={styles.teslaLogo}>
            <Link href={"/"}>
              <img
                src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.teslaLinks}>
            <Link href={"/Tesla"}>Model S</Link>
            <Link href={"/Tesla"}>Model 3</Link>
            <Link href={"/Tesla"}>Modal X</Link>
            <Link href={"/Tesla"}>Modal Y</Link>
            <Link href={"/Tesla"}>Solar Roof</Link>
            <Link href={"/Tesla"}>Solar Panels</Link>
            <Link href={"/Tesla"}>Shop</Link>
            <div className={styles.teslaLinksExtra}>
              <Link href={"/Tesla"}>Tesla Account</Link>
            </div>
            <Link href={"login"} onClick={logoutOfApp}>
              Log out
            </Link>
            <div className={styles.teslaMenu}>
              <div className={styles.tesla__menuLinks}>
                {isMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.teslaAccountInfo}>
          <div className={styles.teslaAccountPerson}>
            <h4>{user?.displayName + "'s"}</h4>
          </div>
          <div className={styles.teslaAccountInfo__right}>
            <Link href={"/"}>Home</Link>
            <Link href={"tesla"}>Account</Link>
            <Link href={""}>History</Link>
            <Link href={"/"} onClick={logoutOfApp}>
              Sign out
            </Link>
          </div>
        </div>
        <div className={styles.teslaCar}>
          <Car
            imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
            model="model s"
            testDrive
          />
          <Car
            imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
            model="model x"
          />
        </div>
      </div>
    </>
  );
}

export default Tesla;
