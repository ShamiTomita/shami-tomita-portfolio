import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <ul>
      <li>
        <a
        href="https://www.linkedin.com/in/shami-tomita-rodriguez/"
        target="_blank"
        rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#D4D4D4" className="icon" />
        </a>
      </li>
      <li>
        <a
         href="https://github.com/ShamiTomita"
         target="_blank"
         rel="noreferrer"
         >
          <FontAwesomeIcon icon={faGithub} color="#D4D4D4" className="icon"/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar;
