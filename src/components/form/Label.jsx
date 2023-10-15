const Label = ({ label, id }) => {
  return (
    <label htmlFor={id} className="label">
      <span className="label-text">{label}</span>
    </label>
  );
};

export default Label;
