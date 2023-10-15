const FormTitle = ({ text, subtitle }) => {
  return (
    <div className="p-5">
      <h2 className="form-title text-primary">{text}</h2>
      <h3 className="text-dark font-bold text-2xl mt-5">{subtitle}</h3>
    </div>
  );
};

export default FormTitle;
