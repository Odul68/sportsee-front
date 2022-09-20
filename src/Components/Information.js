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
