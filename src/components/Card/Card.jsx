import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ image, title, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-img" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
