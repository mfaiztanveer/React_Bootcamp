import PropTypes from 'prop-types';
import './Header.css';

const Header = () => {
  return (
      <header className="header">
          <h2>Dashboard</h2>
          <nav>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
      </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Header;
