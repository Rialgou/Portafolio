import styles from './Home.module.css';
import reactIcon from '../../assets/react.svg';
import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import jsIcon from '../../assets/javascript.svg';
import nodeIcon from '../../assets/nodejs.svg';
import postgreIcon from '../../assets/postgresql.svg';
import pythonIcon from '../../assets/python.svg';
import gmailIcon from '../../assets/mail.svg';
import cvIcon from '../../assets/cv.svg';
const Home = ()=>{
    return(
        <section className={styles.home}>
            <article className={styles.intro}>
                <h1>¡Hola! Soy <span>Richard González Lara</span></h1>
                <p>Soy estudiante de Ingeniería Civil en Informática, actualmente en la fase final de mi formación académica, trabajando en mi memoria de título.</p>
                <p>Mis intereses son el desarrollo de software, la ciberseguridad y el desarrollo de videojuegos.</p>
            </article>
            <div className={styles.icon}>
                <img src={reactIcon} alt="React Icon" />
            </div>
            <div className={styles.containercontact}>
                <div className={styles.skills}>
                    <h2>Skills</h2>
                    <ul>
                        <img src={htmlIcon}  alt="HTML" />
                        <img src={cssIcon}  alt="CSS" />
                        <img src={jsIcon}  alt="JS" />
                        <img src={reactIcon}  alt="React" />
                        <img src={nodeIcon}  alt="NodeJs" />
                        <img src={postgreIcon}  alt="PostgreSql" />
                        <img src={pythonIcon}  alt="Python" />
                    </ul>
                </div>
                <br></br>
                <br></br>

                <div className={styles.contact}>
                    <h2>Contactate conmigo</h2>

                    <a href="mailto:Rialgou@gmail.com"> rialgou@gmail.com<img src={gmailIcon} alt='Icono gmail'/></a> 
                    <a href="#" src="#">Curriculum <img src={cvIcon} alt='Icono curriculum'/></a>
                </div>

            </div>

        </section>
    )
};
export default Home;