const Card = ({ children }) => {
  return (
    <div className="card bg-white shadow-lg">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
