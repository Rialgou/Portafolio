import styles from './Home.module.css';
import reactIcon from '../../assets/react.svg';
const Home = ()=>{
    return(
        <section className={styles.home}>
            <article className={styles.intro}>
                <h1>¡Hola! Soy <span>Richard González Lara</span></h1>
                <p>Soy estudiante de Ingeniería Civil en Informática, actualmente en la fase final de mi formación académica, trabajando en mi memoria de título.</p>
                <p>Estoy muy interesado en el desarrollo de software, especialmente en el backend.</p>
                <p>Me gusta estar informado con la actualidad de las tecnologías y hacer proyectos en mi tiempo libre.</p>
            </article>
            <div className={styles.icon}>
                <img src={reactIcon} alt="React Icon" />
            </div>
            <div className={styles.contact}>
                <h2>Contactate conmigo</h2>
                <a href="#" src="#">Rialgou@gmail.com</a>                
                <a href="#" src="#">CV</a>
            </div>
        </section>
    )
};
export default Home;