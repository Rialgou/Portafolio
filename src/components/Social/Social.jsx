import linkedin from '../../assets/icons8-linkedin.svg';
import github from '../../assets/github-mark.svg';
import style from './Social.module.css';

const Social = ()=>{
    return(
        <div className={style.Social}>
            <a href="https://www.linkedin.com/in/richard-gonzalez-lara-948179169/" target='_blank'><img width='30px' height='30px' src={linkedin} alt="Linkedin logo" /></a>
            <a href="https://github.com/Rialgou" target='_blank'><img width='26px' height='26px' src={github} alt="Github Logo" /></a>
        </div>
    )
};
export default Social;