import Link from "next/link";
import styles from "../styles/index.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
// Debugging

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={styles.header}>
      <div>
        <Link href={"/"}>
          <img
            className={styles.header__img}
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className={styles.header__links}>
        <Link href={"/"}>Model S</Link>
        <Link href={"/"}>Model 3</Link>
        <Link href={"/"}>Modal X</Link>
        <Link href={"/"}>Modal Y</Link>
        <Link href={"/"}>Solar Roof</Link>
        <Link href={"/"}>Solar Panels</Link>
      </div>
      <div className={styles.header__right}>
        <Link href={"/"} className={isMenuOpen && styles.hidden__link}>
          Shop
        </Link>
        <Link href={"/login"} className={isMenuOpen && styles.hidden__link}>
          Tesla Account
        </Link>
        <div
          className={styles.header__menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={styles.header__menuLinks}>
            {isMenuOpen ? <IoMdClose /> :  <CiMenuBurger /> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
