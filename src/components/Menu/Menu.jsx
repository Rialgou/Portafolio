import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import Social from "../Social/Social";
import aboutmeIcon from "../../assets/aboutme.svg";
import projectsIcon from "../../assets/project.svg";
import homeIcon from "../../assets/home.svg";
const Menu = () => {
  return (
    <header>
      <span className={styles.logo}>RIALGOU</span>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/proyectos"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/sobremi"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Sobre Mi
        </NavLink>
      </nav>
      <nav className={styles.navMov}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={homeIcon} alt="Inicio" />
        </NavLink>
        <NavLink
          to="/proyectos"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={projectsIcon} alt="proyectos" />
        </NavLink>
        <NavLink
          to="/sobremi"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={aboutmeIcon} alt="sobre mi" />
        </NavLink>
      </nav>
      <div className={styles.divider}></div>
      <Social></Social>
    </header>
  );
};
export default Menu;
