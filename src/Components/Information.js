import PropTypes from "prop-types";

/**
 * Information cards
 * @component
 * @param {string} icon - Icon representing the category
 * @param {number} quantity - Number from the data
 * @param {string} type - Unit related to the number, either kCal or g
 * @returns component card with all three information from the data
 */
export default function InformationCards({ icon, quantity, type }) {
  return (
    <div className="information">
      <div className="informationIcon">
        <img src={icon} alt={type} />
      </div>
      <div className="informationData">
        {type === "Calories" ? (
          <p className="informationUnit">{quantity}kCal</p>
        ) : (
          <p className="informationUnit">{quantity}g</p>
        )}
        <p className="informationName">{type}</p>
      </div>
    </div>
  );
}

InformationCards.propTypes = {
  icon: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
