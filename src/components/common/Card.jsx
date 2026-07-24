import "./Card.css";

function Card({
  title,
  icon,
  onClick,
  children
}) {
  return (
    <div className="cms-card" onClick={onClick}>
      {icon && <div className="card-icon">{icon}</div>}

      {title && <h3>{title}</h3>}

      {children}
    </div>
  );
}

export default Card;