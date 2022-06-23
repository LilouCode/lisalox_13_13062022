import PropTypes from "prop-types";
function Card({ icon, title, text }) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
Card.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Card;
