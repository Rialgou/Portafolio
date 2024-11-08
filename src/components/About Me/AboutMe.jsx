import styles from "./AboutMe.module.css";
import profilepic from "../../assets/deku.jpg";
const AboutMe = () => {
  return (
    <section className={styles.aboutme}>
      <article className={styles.intro}>
        <h2>Sobre mi</h2>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <p>
              Como comentaba antes, estudio Ingeniería Civil en Informática,
              estoy próximo a titularme y tengo muchos intereses en el sector.
            </p>
            <p>
              Me apasiona el área de desarrollo de software y, constantemente,
              pruebo nuevas tecnologías para lograr resultados más rápidos y
              eficientes.
            </p>
            <p>
              He trabajado en diversas áreas, como backend, frontend,
              inteligencia artificial y visión artificial, ya sea creando
              aplicaciones desde cero o construyendo sobre una base existente.
            </p>
            <p>
              En mi tiempo libre, me gusta practicar basketball, jugar
              videojuegos, ver series y mantenerme al día con las últimas
              novedades tecnológicas.
            </p>
            <p>
              Además, suelo complementar mi conocimiento con cursos gratuitos y
              contenido en YouTube, lo que me ayuda a reforzar las bases y a
              trabajar en mi lógica de programación.
            </p>
          </div>
          <div className={styles.imagecontainer}>
            <img src={profilepic} alt="Foto personal" />
          </div>
        </div>
      </article>
    </section>
  );
};
export default AboutMe;
