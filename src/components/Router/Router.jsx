import Home from '../Home/Home'
import AboutMe from '../About Me/AboutMe'
import Projects from '../Projects/Projects'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
return(
    <Routes>
          <Route path="/portafolio/" element={<Home />} />
          <Route path="portafolio/sobremi" element={<AboutMe />} />
          <Route path="portafolio/proyectos" element={<Projects />} />
    </Routes>
    )
}

export default Router;
