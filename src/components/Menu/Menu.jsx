import styles from './Menu.module.css';
import {Link} from 'react-router-dom';
import Social from '../Social/Social';
const Menu = ()=>{
    return(
        <header>
            <span className={styles.logo}>RIALGOU</span>
            <nav className={styles.nav}>
                <Link to='/portafolio/'>Inicio</Link>
                <Link to="portafolio/proyectos">Proyectos</Link>
                <Link to="portafolio/sobremi">Sobre Mi</Link>
            </nav>
            <nav className={styles.navMov}>
                <Link to='/portafolio/'><img src="" alt="portafolio" /></Link>
                <Link to="portafolio/proyectos"><img src="" alt="proyectos" /></Link>
                <Link to="portafolio/sobremi"><img src="" alt="sobre mi" /></Link>  
            </nav>
            <Social></Social>
        </header>
        

    )
};
export default Menu;