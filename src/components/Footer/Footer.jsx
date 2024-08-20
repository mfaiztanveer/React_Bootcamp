import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ text }) => {
    return (
        <footer className="footer">
            <p>{text}</p>
        </footer>
    );
}


Footer.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Footer;
