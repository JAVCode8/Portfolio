import { Link } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <>
      <div className='header-container'>
        <div className='left-section'>
          <Link><h1>JAV</h1></Link>
        </div>

        <div className='middle-section'>
          <ul>
            <li><Link to="/">About me</Link></li>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/">Experience</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        <div className="right-section">
          <ul>
            <li>
              <Link to="/"><img src='images/facebook.svg' width={30} /></Link>
            </li>
            <li>
              <Link to="/"><img src='images/instagram.svg' width={30} /></Link>
            </li>
            <li>
              <Link to="/"><img src='images/linkedin.png' width={30} /></Link>
            </li>
            <li>
              <Link to="/"><img src='images/gmail.png' width={30} /></Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
      </div>
    </>
  );
}
