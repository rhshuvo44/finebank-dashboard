const Card = ({ children }) => {
  return (
    <div className="card bg-white shadow-lg w-full">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
