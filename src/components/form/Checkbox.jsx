const Checkbox = ({ label }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start">
        <input type="checkbox" className="checkbox checkbox-primary" />
        <span className="label-text ml-2">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
