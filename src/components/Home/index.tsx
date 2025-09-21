// import Logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './index.scss'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hola, mi nombre es <br />
          <span className="highlight">Benjamín Indo</span>
        </h1>
        <h2>
          Estudiante de Ingeniería Civil en Computación <br />
          en la Universidad de Chile
        </h2>
        <p>
          Actualmente busco una práctica profesional donde pueda aplicar mis
          conocimientos de desarrollo web, ciencia de datos y resolución de
          problemas, colaborando activamente y con disposición para aprender
        </p>
        <div className="button-group">
          <Link to="/contact" className="flat-button">
            CONTÁCTAME
          </Link>
          <a
            className="flat-button"
            target="_blank"
            href="https://docs.google.com/document/d/1bpYKJMtcl0LmA64HhPtB40BG6stv6xik/edit?usp=sharing&ouid=108911706098383634847&rtpof=true&sd=true"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  )
}
export default Home
