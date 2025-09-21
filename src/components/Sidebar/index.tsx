import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/logo.svg'
import Logo2 from '../../assets/logo2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={Logo2} alt="logo" />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>{' '}
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active about-link' : 'about-link'
          }
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>{' '}
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active contact-link' : 'contact-link'
          }
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active projects-link' : 'projects-link'
          }
          to="/projects"
        >
          <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/benjaminindo/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BenjaminIndo"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
